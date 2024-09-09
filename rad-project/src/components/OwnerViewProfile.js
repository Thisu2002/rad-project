import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ViewOwner.css';

const OwnerProfile = () => {
  const ownerDetails = JSON.parse(localStorage.getItem('userDetails'));
  const ownerId = ownerDetails ? ownerDetails.id : null;

  const [ownerInfo, setOwnerInfo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableDetails, setEditableDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOwnerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/ownerProfile/${ownerId}`);
        const data = await response.json();
        setOwnerInfo(data);
        setEditableDetails({
          fullName: data.fullName,
          email: data.email,
          address: data.address,
          contactNo: data.contactNo,
          password: ''
        });
      } catch (error) {
        console.error("Error fetching owner details:", error);
      }
    };

    if (ownerId) {
      fetchOwnerDetails();
    }
  }, [ownerId]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:5000/ownerProfile/editProfile/${ownerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editableDetails),
      });

      if (response.ok) {
        const updatedOwner = await response.json();
        setOwnerInfo(updatedOwner);
        setIsEditing(false);
        setErrorMessage('');  // Clear error message on success
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Failed to save owner details');
      }
    } catch (error) {
      console.error("Error saving owner details:", error);
      setErrorMessage('Server error. Please try again later.');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/ownerProfile/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Deleted successfully!");
        navigate('/login') // Refresh the list after deletion
      } else {
        console.error("Failed to delete the pet owner.");
      }
    } catch (error) {
      console.error("Error deleting pet owner:", error);
    }
  };

  const handleChange = (e) => {
    setEditableDetails({
      ...editableDetails,
      [e.target.name]: e.target.value,
    });
  };

  if (!ownerInfo) {
    return <p>Loading owner details...</p>;
  }

  return (
    <div className="view-owner-page">
      <div className="owner-picture" />
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
            ownerInfo.fullName
          )}
        </h2>
        <p><strong>Email:</strong> {isEditing ? (
          <input
            type="email"
            name="email"
            value={editableDetails.email}
            onChange={handleChange}
          />
        ) : (
          ownerInfo.email
        )}</p>
        <p><strong>Address:</strong> {isEditing ? (
          <input
            type="text"
            name="address"
            value={editableDetails.address}
            onChange={handleChange}
          />
        ) : (
          ownerInfo.address
        )}</p>
        <p><strong>Contact No:</strong> {isEditing ? (
          <input
            type="text"
            name="contactNo"
            value={editableDetails.contactNo}
            onChange={handleChange}
          />
        ) : (
          ownerInfo.contactNo
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
      </div>

      {errorMessage && 
        <p className="error-message" style={{ color: 'red' }}>
          {errorMessage}
        </p>
      }


      {isEditing ? (
        <button className="edit-button" onClick={handleSaveClick}>Save</button>
      ) : (
        <button className="edit-button" onClick={handleEditClick}>Edit Info</button>
      )}
      <button
        onClick={() => handleDelete(ownerId)} className="edit-button"> Delete Account </button>
    </div>
  );
};

export default OwnerProfile;
