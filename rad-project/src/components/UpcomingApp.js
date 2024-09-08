import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/UpcomingApp.css'; // Ensure this file exists and contains the styles

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [showAddRecord, setShowAddRecord] = useState(null);
  const [newRecord, setNewRecord] = useState({ command: '' });
  const [addedRecordAppointments, setAddedRecordAppointments] = useState(new Set());

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await fetch('http://localhost:5000/vet-appointments/upcoming'); // Adjust endpoint if needed
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setAppointments(data);

        // Initialize the addedRecordAppointments set
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

      if (!response.ok) throw new Error('Failed to add record');
      const result = await response.json();
      alert(result.message);

      // Update the addedRecordAppointments set and fetch updated appointments
      setAddedRecordAppointments(prev => new Set(prev).add(appointmentId));
      const updatedResponse = await fetch('http://localhost:5000/vet-appointments/upcoming');
      const updatedData = await updatedResponse.json();
      setAppointments(updatedData);

      setNewRecord({ command: '' });
      setShowAddRecord(null);
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  return (
    <div className="upcoming-appointments-container">
      <h1>Upcoming Appointments</h1>
      {appointments.length > 0 ? (
        <table className="appointments-table">
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
            {appointments.map((appointment) => (
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
                        <button onClick={() => setShowAddRecord(appointment._id)}>Add Record</button>
                      ) : (
                        <button disabled>Add Record</button>
                      )}
                      <Link to={`/view-records/${appointment._id}`} className="view-records-link">View Records</Link>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No upcoming appointments.</p>
      )}
    </div>
  );
};

export default UpcomingAppointments;
