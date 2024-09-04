import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ViewOwner.css';

const ViewOwner = () => {
  const { id } = useParams(); // Extract the MongoDB _id from the URL
  const [ownerDetails, setOwnerDetails] = useState(null);

  useEffect(() => {
    const fetchOwnerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/pet-owners/view-owner/${id}`);
        const data = await response.json();
        setOwnerDetails(data);
      } catch (error) {
        console.error("Error fetching owner details:", error);
      }
    };

    fetchOwnerDetails();
  }, [id]);

  if (!ownerDetails) {
    return <p>Loading owner details...</p>;
  }

  return (
    <div className="view-owner-page">
      <div className="owner-picture" /> {/* Placeholder for the owner's picture */}
      <div className="owner-details">
        <h2>{ownerDetails.fullName}</h2>
        <p><strong>Email:</strong> {ownerDetails.email}</p>
        <p><strong>Address:</strong> {ownerDetails.address}</p>
        <p><strong>Contact No:</strong> {ownerDetails.contactNo}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ViewOwner;