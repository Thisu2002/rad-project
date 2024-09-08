// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import '../styles/ViewRecords.css'; // Ensure this file exists and contains the styles

// const ViewRecords = () => {
//   const { appointmentId } = useParams();
//   const [records, setRecord] = useState(''); // This will store the single record string
//   const [isEditing, setIsEditing] = useState(false);
//   const [editValue, setEditValue] = useState('');

//   useEffect(() => {
//     async function fetchRecord() {
//       try {
//         const response = await fetch(`http://localhost:5000/vet-appointments/${appointmentId}`);
//         const data = await response.json();
//         setRecord(data.records || '');
//       } catch (error) {
//         console.error('Error fetching records:', error);
//       }
//     }

//     fetchRecord();
//   }, [appointmentId]);

//   const handleEditClick = () => {
//     setIsEditing(true);
//     setEditValue(records);
//   };

//   const handleInputChange = (e) => {
//     setEditValue(e.target.value);
//   };

//   const handleSaveClick = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/vet-appointments/${appointmentId}/records`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           newRecord: editValue, // Sending the updated string to the backend
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update record');
//       }

//       setRecord(editValue); // Update the local record with the saved string
//       setIsEditing(false);
//       setEditValue('');
//     } catch (error) {
//       console.error('Error saving record:', error);
//     }
//   };

//   const handleCancelClick = () => {
//     setIsEditing(false);
//     setEditValue('');
//   };

//   const handleDeleteClick = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/vet-appointments/${appointmentId}/records`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete record');
//       }

//       setRecord(''); // Clear the record from the UI
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   };

//   return (
//     <div className="view-records-container">
//       <h1>Records</h1>
//       {records ? (
//         <div className="record-item">
//           {isEditing ? (
//             <div>
//               <textarea
//                 value={editValue}
//                 onChange={handleInputChange}
//                 rows="4"
//                 cols="50"
//               />
//               <button onClick={handleSaveClick}>Save</button>
//               <button onClick={handleCancelClick}>Cancel</button>
//             </div>
//           ) : (
//             <div>
//               <p><strong>Record:</strong> {records}</p>
//               <button onClick={handleEditClick}>Edit</button>
//               <button onClick={handleDeleteClick}>Delete</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>No record found.</p>
//       )}
//     </div>
//   );
// };

// export default ViewRecords;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ViewRecords.css'; // Ensure this file exists and contains the styles

const ViewRecords = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [record, setRecord] = useState(''); // This will store the single record string
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    async function fetchAppointmentAndRecord() {
      try {
        const response = await fetch(`http://localhost:5000/vet-appointments/${appointmentId}`);
        const data = await response.json();
        console.log('Fetched appointment:', data); 
        setAppointment(data);
        setRecord(data.records || '');
      } catch (error) {
        console.error('Error fetching appointment and record:', error);
      }
    }

    fetchAppointmentAndRecord();
  }, [appointmentId]);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditValue(record);
  };

  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:5000/vet-appointments/${appointmentId}/records`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newRecord: editValue, // Sending the updated string to the backend
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update record');
      }

      setRecord(editValue); // Update the local record with the saved string
      setIsEditing(false);
      setEditValue('');
    } catch (error) {
      console.error('Error saving record:', error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditValue('');
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`http://localhost:5000/vet-appointments/${appointmentId}/records`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete record');
      }

      setRecord(''); // Clear the record from the UI
      setIsEditing(false);
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  if (!appointment) return <p>Loading appointment details...</p>;

  return (
    <div className="view-records-container">
      <h1>Appointment Details and Records</h1>
      <div className="appointment-details">
        <h2>Appointment Details</h2>
        <p>Date: {appointment?.date ? new Date(appointment.date).toLocaleDateString() : 'Not available'}</p>
        <p>Time: {appointment.time}</p>
        <p>Pet Owner: {appointment.petOwner}</p>
        <p>Pet ID: {appointment.petID}</p>
      </div>
      <div className="record-item">
        <h2>Record</h2>
        {record ? (
          <div>
            {isEditing ? (
              <div>
                <textarea
                  value={editValue}
                  onChange={handleInputChange}
                  rows="4"
                  cols="50"
                />
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>{record}</p>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
              </div>
            )}
          </div>
        ) : (
          <p>No record found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewRecords;

