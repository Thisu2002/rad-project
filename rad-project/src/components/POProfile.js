import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ViewOwner.css';

const ViewPO = () => {
  const { id } = useParams();
  const [PODetails, setPODetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableDetails, setEditableDetails] = useState({});

  useEffect(() => {
    const fetchPODetails = async () => {
      if(id){
      try {
        const response = await fetch(`http://localhost:5000/petOwnerProfile/view/${id}`);
        const data = await response.json();
        setPODetails(data);
        setEditableDetails({
          fullName: data.fullName,
          username: data.username,
          gender: data.gender,
          email: data.email,
          address: data.address,
          contactNo: data.contactNo,
          password: ''
        });
      } catch (error) {
        console.error("Error fetching po details:", error);
      }
    }
    };

    fetchPODetails();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:5000/petOwnerProfile/edit/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editableDetails),
      });

      if (response.ok) {
        const updatedPO = await response.json();
        setPODetails(updatedPO);
        setIsEditing(false);
      } else {
        console.error("Failed to save pet owner details");
      }
    } catch (error) {
      console.error("Error saving pet owner details:", error);
    }
  };

  const handleChange = (e) => {
    setEditableDetails({
      ...editableDetails,
      [e.target.name]: e.target.value,
    });
  };

  if (!PODetails) {
    return <p>Loading pet owner details...</p>;
  }

  const getTitlePrefix = (gender) => {
    if (!gender) return '';
    const genderLower = gender.toLowerCase();
    if (genderLower === 'male') {
      return 'Mr.';
    } else if (genderLower === 'female') {
      return 'Mrs./Miss';
    }
    return '';
  };

  return (
    <div className="view-owner-page">
      <div className="po-picture" />
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
          `${getTitlePrefix(PODetails.gender)} ${PODetails.fullName}`
        )}
      </h2>
      <p><strong>Username:</strong> {isEditing ? (
          <input
            type="text"
            name="username"
            value={editableDetails.username}
            onChange={handleChange}
          />
        ) : (
          PODetails.username
        )}</p>
        <p><strong>Gender:</strong> {isEditing ? (
          <input
            type="text"
            name="gender"
            value={editableDetails.gender}
            onChange={handleChange}
          />
        ) : (
          PODetails.gender
        )}</p>
        <p><strong>Email:</strong> {isEditing ? (
          <input
            type="email"
            name="email"
            value={editableDetails.email}
            onChange={handleChange}
          />
        ) : (
          PODetails.email
        )}</p>
        <p><strong>Address:</strong> {isEditing ? (
          <input
            type="text"
            name="address"
            value={editableDetails.address}
            onChange={handleChange}
          />
        ) : (
          PODetails.address
        )}</p>
        <p><strong>Contact No:</strong> {isEditing ? (
          <input
            type="text"
            name="contactNo"
            value={editableDetails.contactNo}
            onChange={handleChange}
          />
        ) : (
          PODetails.contactNo
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
      {isEditing ? (
        <button className="edit-button" onClick={handleSaveClick}>Save</button>
      ) : (
        
        <button className="edit-button" onClick={handleEditClick}>Edit Info</button>
        
      )}
    </div>
  );
};

export default ViewPO;
