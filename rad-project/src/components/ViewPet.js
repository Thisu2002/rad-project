import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/ViewPet.css';

import petImage from '../images/statPets.png';
import dogImage from '../images/dogImage.png'; 
import catImage from '../images/catImage.png';
import rabbitImage from '../images/rabbitImage.png';
import birdImage from '../images/birdImage.png';

const speciesImages = {
    dog: dogImage,
    cat: catImage,
    rabbit: rabbitImage,
    bird: birdImage,
    Bird: birdImage,
    Dog: dogImage,
    Cat: catImage,
    Rabbit: rabbitImage,
};

const formatDateForDisplay = (dateStr) => {
  const date = new Date(dateStr);
  return date.toISOString().split('T')[0];
};

const ViewPet = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableDetails, setEditableDetails] = useState({});

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/petOwner/viewPet/${id}`);
        const data = await response.json();
        setPetDetails(data);
        setEditableDetails({
          name: data.name,
          species: data.species,
          breed: data.breed,
          gender: data.gender,
          dob: formatDateForDisplay(data.dob),  // Format date here
          age: data.age,
          weight: data.weight,
        });
      } catch (error) {
        console.error("Error fetching pet details:", error);
      }
    };

    fetchPetDetails();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      // Convert date to ISO format for saving
      const formattedDetails = {
        ...editableDetails,
        dob: new Date(editableDetails.dob).toISOString()
      };

      const response = await fetch(`http://localhost:5000/petOwner/editPet/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedDetails),
      });

      if (response.ok) {
        const updatedPet = await response.json();
        setPetDetails(updatedPet);
        setIsEditing(false);
      } else {
        console.error("Failed to save pet details");
      }
    } catch (error) {
      console.error("Error saving pet details:", error);
    }
  };

  const handleChange = (e) => {
    setEditableDetails({
      ...editableDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/petOwner/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Deleted successfully!");
        navigate('/petOwner');
      } else {
        console.error("Failed to delete the pet.");
      }
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  if (!petDetails) {
    return <p>Loading pet details...</p>;
  }

  return (
    <div className='pet-profile-page'>
      <div className="view-pet-page">
      <img 
        src={speciesImages[petDetails.species] || petImage}
        alt={petDetails.species}
        className="pet-icon" 
        />
      <div className="pet-details">
        <h2>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editableDetails.name}
              onChange={handleChange}
            />
          ) : (
            petDetails.name
          )}
        </h2>
        <p><strong>Species:</strong> {isEditing ? (
          <input
            type="text"
            name="species"
            value={editableDetails.species}
            onChange={handleChange}
          />
        ) : (
          petDetails.species
        )}</p>
        <p><strong>Breed:</strong> {isEditing ? (
          <input
            type="text"
            name="breed"
            value={editableDetails.breed}
            onChange={handleChange}
          />
        ) : (
          petDetails.breed
        )}</p>
        <p><strong>DOB:</strong> {isEditing ? (
          <input
            type="date"
            name="dob"
            value={editableDetails.dob}
            onChange={handleChange}
          />
        ) : (
          formatDateForDisplay(petDetails.dob) // Display formatted date
        )}</p>
        <p><strong>Age:</strong> {isEditing ? (
          <input
            type="text"
            name="age"
            value={editableDetails.age}
            onChange={handleChange}
          />
        ) : (
          petDetails.age
        )}</p>
        <p><strong>Gender:</strong> {isEditing ? (
          <input
            type="text"
            name="gender"
            value={editableDetails.gender}
            onChange={handleChange}
          />
        ) : (
          petDetails.gender
        )}</p>
        <p><strong>Weight:</strong> {isEditing ? (
          <input
            type="text"
            name="weight"
            value={editableDetails.weight}
            onChange={handleChange}
          />
        ) : (
          petDetails.weight
        )}</p>
      </div>
      {isEditing ? (
        <button className="pet-edit-button" onClick={handleSaveClick}>Save</button>
      ) : (
        <button className="pet-edit-button" onClick={handleEditClick}>Edit Info</button>
      )}
    </div>

    <div className="pet-actions">
      <button className="pet-action-button">Make an Appointment</button>
      <button className="pet-action-button">View Records</button>
      <button className="pet-action-button" onClick={() => handleDelete(id)}>Delete Pet</button>
    </div>

    </div>
  );
};

export default ViewPet;
