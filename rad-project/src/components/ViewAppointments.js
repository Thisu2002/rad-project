import React, { useState, useEffect } from "react";
import "../styles/PetOwners.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:5000/vet-appointments");
      const appointments = await response.json();
      setAppointments(appointments); // Adjust based on API response structure
    } catch (error) {
      console.error("Error fetching appointments:", error);
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
          </tr>
        </thead>
        <tbody>
          {currentItems.map((appointment, index) => {
            const { formattedDate, formattedTime } = formatDateTime(appointment.dateTime); // Extract date and time
            return (
              <tr key={index}>
                <td>{appointment.petOwner || "Unknown"}</td>
                <td>{formattedDate}</td>
                <td>{formattedTime}</td>
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

export default Appointments;