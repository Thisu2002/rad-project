import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';

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
                setLoading(false); // Set loading to false even on error
            }
        };

        fetchPets();
    }, []);

    if (loading) {
        return <p className='no-pets'>Loading pets...</p>;
    }

    if (error) {
        return <p className='no-pets'>{error}</p>;
    }

    return (
        <div className="pet-list">
            <h2>My Pets</h2>
            {Array.isArray(pets) && pets.length === 0 ? (
                <p>Oops, no pet registered</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Species</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(pets) ? (
                            pets.map((pet) => (
                                <tr key={pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.species}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">No valid pet data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OwnerViewPets;