// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import '../styles/ViewOwner.css';

// const ViewVet = () => {
//   const { id } = useParams();
//   const [vetDetails, setVetDetails] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editableDetails, setEditableDetails] = useState({});

//   useEffect(() => {
//     const fetchVetDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/vets/view-vet/${id}`);
//         const data = await response.json();
//         setVetDetails(data);
//         setEditableDetails({
//           fullName: data.fullName,
//           gender: data.gender,
//           licenseNo: data.licenseNo,
//           email: data.email,
//           address: data.address,
//           contactNo: data.contactNo,
//           experience: data.experience,
//           password: ''
//         });
//       } catch (error) {
//         console.error("Error fetching vet details:", error);
//       }
//     };

//     fetchVetDetails();
//   }, [id]);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/vets/edit-vet/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editableDetails),
//       });

//       if (response.ok) {
//         const updatedVet = await response.json();
//         setVetDetails(updatedVet);
//         setIsEditing(false);
//       } else {
//         console.error("Failed to save vet details");
//       }
//     } catch (error) {
//       console.error("Error saving vet details:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setEditableDetails({
//       ...editableDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

//   if (!vetDetails) {
//     return <p>Loading vet details...</p>;
//   }

//   const getTitlePrefix = (gender) => {
//     if (gender.toLowerCase() === 'male') {
//       return 'Mr.';
//     } else if (gender.toLowerCase() === 'female') {
//       return 'Mrs./Miss';
//     }
//     return '';
//   };

//   return (
//     <div className="view-owner-page">
//       <div className="vet-picture" />
//       <div className="owner-details">
//       <h2>
//         {isEditing ? (
//           <input
//             type="text"
//             name="fullName"
//             value={editableDetails.fullName}
//             onChange={handleChange}
//           />
//         ) : (
//           `${getTitlePrefix(vetDetails.gender)} ${vetDetails.fullName}`
//         )}
//       </h2>
//         <p><strong>Gender:</strong> {isEditing ? (
//           <input
//             type="text"
//             name="gender"
//             value={editableDetails.gender}
//             onChange={handleChange}
//           />
//         ) : (
//           vetDetails.gender
//         )}</p>
//         <p><strong>License No:</strong> {isEditing ? (
//           <input
//             type="text"
//             name="licenseNo"
//             value={editableDetails.licenseNo}
//             onChange={handleChange}
//           />
//         ) : (
//           vetDetails.licenseNo
//         )}</p>
//         <p><strong>Email:</strong> {isEditing ? (
//           <input
//             type="email"
//             name="email"
//             value={editableDetails.email}
//             onChange={handleChange}
//           />
//         ) : (
//           vetDetails.email
//         )}</p>
//         <p><strong>Address:</strong> {isEditing ? (
//           <input
//             type="text"
//             name="address"
//             value={editableDetails.address}
//             onChange={handleChange}
//           />
//         ) : (
//           vetDetails.address
//         )}</p>
//         <p><strong>Contact No:</strong> {isEditing ? (
//           <input
//             type="text"
//             name="contactNo"
//             value={editableDetails.contactNo}
//             onChange={handleChange}
//           />
//         ) : (
//           vetDetails.contactNo
//         )}</p>
//         <p><strong>Experience:</strong> {isEditing ? (
//           <input
//             type="text"
//             name="experience"
//             value={editableDetails.experience}
//             onChange={handleChange}
//           />
//         ) : (
//           vetDetails.experience
//         )}</p>
//         {isEditing && (
//           <p>
//             <strong>New Password (if needed): </strong>
//             <input
//               type="password"
//               name="password"
//               value={editableDetails.password}
//               onChange={handleChange}
//             />
//           </p>
//         )}
//       </div>
//       {isEditing ? (
//         <button className="edit-button" onClick={handleSaveClick}>Save</button>
//       ) : (
//         <button className="edit-button" onClick={handleEditClick}>Edit Info</button>
//       )}
//     </div>
//   );
// };

// export default ViewVet;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ViewOwner.css';

const ViewVet = () => {
  const { id } = useParams();
  const [vetDetails, setVetDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableDetails, setEditableDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchVetDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/vets/view-vet/${id}`);
        const data = await response.json();
        setVetDetails(data);
        setEditableDetails({
          fullName: data.fullName,
          gender: data.gender,
          licenseNo: data.licenseNo,
          email: data.email,
          address: data.address,
          contactNo: data.contactNo,
          experience: data.experience,
          password: ''
        });
      } catch (error) {
        console.error("Error fetching vet details:", error);
      }
    };

    fetchVetDetails();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
    setErrorMessage(''); // Reset error message on edit
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:5000/vets/edit-vet/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editableDetails),
      });

      if (response.ok) {
        const updatedVet = await response.json();
        setVetDetails(updatedVet);
        setIsEditing(false);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Failed to save vet details');
      }
    } catch (error) {
      console.error("Error saving vet details:", error);
      setErrorMessage('An error occurred while saving. Please try again.');
    }
  };

  const handleChange = (e) => {
    setEditableDetails({
      ...editableDetails,
      [e.target.name]: e.target.value,
    });
  };

  const getTitlePrefix = (gender) => {
    if (gender.toLowerCase() === 'male') {
      return 'Mr.';
    } else if (gender.toLowerCase() === 'female') {
      return 'Mrs./Miss';
    }
    return '';
  };

  if (!vetDetails) {
    return <p>Loading vet details...</p>;
  }

  return (
    <div className="view-owner-page">
      <div className="vet-picture" />
      <div className="owner-details">
        <h2>
          {isEditing ? (
            <input
              type="text"
              name="fullName"
              value={editableDetails.fullName}
              onChange={handleChange}
            />
          ) : (
            `${getTitlePrefix(vetDetails.gender)} ${vetDetails.fullName}`
          )}
        </h2>
        <p><strong>Gender:</strong> {isEditing ? (
          <input
            type="text"
            name="gender"
            value={editableDetails.gender}
            onChange={handleChange}
          />
        ) : (
          vetDetails.gender
        )}</p>
        <p><strong>License No:</strong> {isEditing ? (
          <input
            type="text"
            name="licenseNo"
            value={editableDetails.licenseNo}
            onChange={handleChange}
          />
        ) : (
          vetDetails.licenseNo
        )}</p>
        <p><strong>Email:</strong> {isEditing ? (
          <input
            type="email"
            name="email"
            value={editableDetails.email}
            onChange={handleChange}
          />
        ) : (
          vetDetails.email
        )}</p>
        <p><strong>Address:</strong> {isEditing ? (
          <input
            type="text"
            name="address"
            value={editableDetails.address}
            onChange={handleChange}
          />
        ) : (
          vetDetails.address
        )}</p>
        <p><strong>Contact No:</strong> {isEditing ? (
          <input
            type="text"
            name="contactNo"
            value={editableDetails.contactNo}
            onChange={handleChange}
          />
        ) : (
          vetDetails.contactNo
        )}</p>
        <p><strong>Experience:</strong> {isEditing ? (
          <input
            type="text"
            name="experience"
            value={editableDetails.experience}
            onChange={handleChange}
          />
        ) : (
          vetDetails.experience
        )}</p>
        {isEditing && (
          <p>
            <strong>New Password (if needed): </strong>
            <input
              type="password"
              name="password"
              value={editableDetails.password}
              onChange={handleChange}
            />
          </p>
        )}
        {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
      {isEditing ? (
        <button className="edit-button" onClick={handleSaveClick}>Save</button>
      ) : (
        <button className="edit-button" onClick={handleEditClick}>Edit Info</button>
      )}
    </div>
  );
};

export default ViewVet;
