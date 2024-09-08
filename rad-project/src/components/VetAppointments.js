import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/VetAppointments.css';

const VetAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [showAddRecord, setShowAddRecord] = useState(null);
  const [newRecord, setNewRecord] = useState({ command: '' });
  const [addedRecordAppointments, setAddedRecordAppointments] = useState(new Set());

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await fetch('http://localhost:5000/vet-appointments');
        const data = await response.json();
        setAppointments(data);

        // Set the addedRecordAppointments based on existing records
        const addedRecords = new Set(
          data.filter(app => app.records && app.records.trim() !== '').map(app => app._id)
        );
        setAddedRecordAppointments(addedRecords);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    }

    fetchAppointments();
  }, []);

  const handleAddRecord = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:5000/vet-appointments/${appointmentId}/records`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecord),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);

        // Update the list of appointments with added record status
        setAddedRecordAppointments(prev => new Set(prev).add(appointmentId));

        // Fetch updated appointments to refresh the data
        const updatedResponse = await fetch('http://localhost:5000/vet-appointments');
        const updatedData = await updatedResponse.json();
        setAppointments(updatedData);

        setNewRecord({ command: '' });
        setShowAddRecord(null);
      } else {
        alert(result.message); // Show error message
      }
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  return (
    <div className="vetappointments-container">
      <div className="vetappointments-content">
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Pet Owner</th>
              <th>Pet ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.petOwner}</td>
                  <td>{appointment.petID}</td>
                  <td>
                    {showAddRecord === appointment._id ? (
                      <div className="add-record-form">
                        <input
                          type="text"
                          placeholder="Command"
                          value={newRecord.command}
                          onChange={(e) => setNewRecord({ command: e.target.value })}
                        />
                        <button onClick={() => handleAddRecord(appointment._id)}>Submit</button>
                        <button onClick={() => setShowAddRecord(null)}>Cancel</button>
                      </div>
                    ) : (
                      <>
                        {!addedRecordAppointments.has(appointment._id) ? (
                          <button onClick={() => setShowAddRecord(appointment._id)}className="button-link">Add Record</button>
                        ) : (
                          <button disabled>Add Record</button>
                        )}
                        <Link to={`/view-records/${appointment._id}`}className="button-link">View Records</Link>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No appointments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VetAppointments;
