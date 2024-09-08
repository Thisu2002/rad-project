import React, { useState, useEffect } from "react";
import "../styles/PetOwners.css";

const OwnerViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
            const { formattedDate, formattedTime } = formatDateTime(appointment.dateTime); // Extract date and time
            return (
              <tr key={index}>
                <td>{appointment.petName || "Unknown"}</td>
                <td>{formattedDate}</td>
                <td>{formattedTime}</td>
                <td>
                  <button onClick={() => handleDelete(appointment._id)} className="action-link delete-link">
                    Delete
                  </button>
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
