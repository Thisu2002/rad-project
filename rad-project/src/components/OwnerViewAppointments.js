import React, { useState, useEffect } from "react";
import "../styles/PetOwners.css";

const OwnerViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingAppointment, setEditingAppointment] = useState(null); // Track editing appointment
  const [editedFields, setEditedFields] = useState({ petName: "", date: "", time: "" });
  const itemsPerPage = 8;

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const ownerDetails = JSON.parse(localStorage.getItem('userDetails'));
      if (!ownerDetails) {
        console.error("Owner details not found in localStorage");
        return;
      }

      const ownerID = ownerDetails.id;
      const response = await fetch(`http://localhost:5000/ownerViewAppointments/${ownerID}`);
      const data = await response.json();

      if (response.ok) {
        setAppointments(data.appointments);
      } else {
        console.error("Failed to fetch appointments:", data.message);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleDelete = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:5000/deleteAppointment/${appointmentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Deleted appointment successfully!');
        setAppointments(appointments.filter(app => app._id !== appointmentId));
      } else {
        console.error("Failed to delete appointment");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (appointment) => {
    setEditingAppointment(appointment._id); // Set the current appointment being edited
    setEditedFields({
      petName: appointment.petName,
      date: new Date(appointment.dateTime).toISOString().split("T")[0], // Set date as YYYY-MM-DD
      time: new Date(appointment.dateTime).toTimeString().split(" ")[0].substring(0, 5), // HH:MM
    });
  };

  const handleSave = async (appointmentId) => {
    try {
      const ownerDetails = JSON.parse(localStorage.getItem('userDetails'));
      const petOwner = ownerDetails.fullName;

      const petResponse = await fetch(`http://localhost:5000/petByName/${editedFields.petName}`);
      const petData = await petResponse.json();
      const petID = petData.petID; // Assuming the response contains the pet's ID

      const updatedAppointment = {
        petID,
        petOwner,
        dateTime: new Date(`${editedFields.date}T${editedFields.time}`), // Combine date and time
      };

      const response = await fetch(`http://localhost:5000/updateAppointment/${appointmentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAppointment),
      });

      if (response.ok) {
        alert("Appointment updated successfully!");
        setEditingAppointment(null); // Exit editing mode
        fetchAppointments(); // Refresh appointments
      } else {
        console.error("Failed to update appointment");
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
    }
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appointments.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(appointments.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Helper function to format date and time
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString(); // Format date
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format time
    return { formattedDate, formattedTime };
  };

  return (
    <div className="pet-owners-container">
      <table className="pet-owners-table">
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((appointment, index) => {
            const { formattedDate, formattedTime } = formatDateTime(appointment.dateTime);
            return (
              <tr key={index}>
                <td>
                  {editingAppointment === appointment._id ? (
                    <input
                      type="text"
                      value={editedFields.petName}
                      onChange={(e) => setEditedFields({ ...editedFields, petName: e.target.value })}
                    />
                  ) : (
                    appointment.petName || "Unknown"
                  )}
                </td>
                <td>
                  {editingAppointment === appointment._id ? (
                    <input
                      type="date"
                      value={editedFields.date}
                      onChange={(e) => setEditedFields({ ...editedFields, date: e.target.value })}
                    />
                  ) : (
                    formattedDate
                  )}
                </td>
                <td>
                  {editingAppointment === appointment._id ? (
                    <input
                      type="time"
                      value={editedFields.time}
                      onChange={(e) => setEditedFields({ ...editedFields, time: e.target.value })}
                    />
                  ) : (
                    formattedTime
                  )}
                </td>
                <td>
                  {editingAppointment === appointment._id ? (
                    <button onClick={() => handleSave(appointment._id)} className="action-link save-link">
                      Save
                    </button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(appointment)} className="action-link edit-link">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(appointment._id)} className="action-link delete-link">
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <span className="pagination-previous" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
          Previous
        </span>
        {pageNumbers.map(number => (
          <span
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? "pagination-active" : ""}
          >
            {number}
          </span>
        ))}
        <span className="pagination-next" onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageNumbers.length))}>
          Next
        </span>
      </div>
    </div>
  );
};

export default OwnerViewAppointments;