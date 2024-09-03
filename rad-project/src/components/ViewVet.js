import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ViewOwner.css';

const ViewVet = () => {
  const { id } = useParams(); // Extract the MongoDB _id from the URL
  const [vetDetails, setVetDetails] = useState(null);

  useEffect(() => {
    const fetchVetDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/vets/view-vet/${id}`);
        const data = await response.json();
        setVetDetails(data);
      } catch (error) {
        console.error("Error fetching owner details:", error);
      }
    };

    fetchVetDetails();
  }, [id]);

  if (!vetDetails) {
    return <p>Loading owner details...</p>;
  }

  return (
    <div className="view-owner-page">
      <h2>{vetDetails.fullName}</h2>
      <p><strong>Gender:</strong> {vetDetails.gender}</p>
      <p><strong>License No:</strong> {vetDetails.licenseNo}</p>
      <p><strong>Experience:</strong> {vetDetails.experience}</p>
      <p><strong>Email:</strong> {vetDetails.email}</p>
      <p><strong>Address:</strong> {vetDetails.address}</p>
      <p><strong>Contact No:</strong> {vetDetails.contactNo}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ViewVet;