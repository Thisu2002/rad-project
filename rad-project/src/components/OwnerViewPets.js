import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/OwnerViewPets.css';
import petImage from '../images/statPets.png'
import dogImage from '../images/dogImage.png'; 
import catImage from '../images/catImage.png';
import rabbitImage from '../images/rabbitImage.png'; 

const speciesImages = {
    dog: dogImage,
    cat: catImage,
    rabbit: rabbitImage,
    Dog: dogImage,
    Cat: catImage,
    Rabbit: rabbitImage,
};

const OwnerViewPets = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const ownerDetails = JSON.parse(localStorage.getItem('userDetails'));

                if (!ownerDetails || !ownerDetails.id) {
                    setError('User details not found. Please log in again.');
                    setLoading(false);
                    return;
                }

                const ownerID = ownerDetails.id;

                const response = await axios.get(`http://localhost:5000/pets/${ownerID}`);
                console.log('Response data:', response.data);

                let petsData = response.data.pets;

                setPets(petsData);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to load pets');
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    if (loading) {
        return <p>Loading pets...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="owner-pet-list">
            {pets.length === 0 ? (
                <div className="no-pets">
                    <p>Oops, no pets registered</p>
                </div>
            ) : (
                <div className="pets-grid">
                    {pets.map((pet) => (
                        <div key={pet._id} className="pet-box">
                            <div className="pet-content">
                                <img 
                                    src={speciesImages[pet.species] || petImage} // Default image if species not found
                                    alt={pet.species} 
                                    className="pet-icon" 
                                />
                                <div>
                                    <h3>{pet.name}</h3>
                                    <p>Species: {pet.species}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OwnerViewPets;
