import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/ViewOwner.css';

const ViewPO = () => {
  //const { id } = useParams(); // This will be set from localStorage
  const [PODetails, setPODetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableDetails, setEditableDetails] = useState({});

  useEffect(() => {
    const fetchPODetails = async () => {
      try {
        const ownerDetails = JSON.parse(localStorage.getItem('userDetails'));

        if (!ownerDetails || !ownerDetails.id) {
          console.error('User details not found.');
          return;
        }

        const response = await axios.get(`http://localhost:5000/petOwnerProfile/view/${ownerDetails.id}`);
        setPODetails(response.data);
        setEditableDetails({
          fullName: response.data.fullName,
          username: response.data.username,
          gender: response.data.gender,
          email: response.data.email,
          address: response.data.address,
          contactNo: response.data.contactNo,
          password: ''
        });
      } catch (error) {
        console.error('Error fetching pet owner details:', error);
      }
    };

    fetchPODetails();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/petOwnerProfile/edit/${PODetails._id}`, editableDetails);

      if (response.status === 200) {
        setPODetails(response.data);
        setIsEditing(false);
      } else {
        console.error('Failed to save pet owner details');
      }
    } catch (error) {
      console.error('Error saving pet owner details:', error);
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
