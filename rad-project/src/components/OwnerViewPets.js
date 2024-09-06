import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OwnerViewPets = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the pets of the logged-in pet owner
    useEffect(() => {
        const fetchPets = async () => {
            try {
                // Get ownerDetails from localStorage
                const ownerDetails = JSON.parse(localStorage.getItem('userDetails'));

                // Check if ownerDetails exist and if _id is present
                if (!ownerDetails || !ownerDetails.id) {
                    setError('User details not found. Please log in again.');
                    setLoading(false);
                    return;
                }

                const ownerID = ownerDetails.id; // Get the correct owner ID

                // API call to fetch pets for the logged-in pet owner
                const response = await axios.get(`http://localhost:5000/pets/${ownerID}`);
                console.log('Response data:', response.data); // Log the data fetched from API
                console.log(response.data.length);

                // Ensure the response is an array before updating the state
                if (Array.isArray(response.data)) {
                    setPets(response.data); // Set the pets state
                } else {
                    setPets([]); // Set to an empty array if the response is not an array
                }

                setLoading(false); // Set loading to false once data is fetched
            } catch (err) {
                console.error(err);
                setError('Failed to load pets');
                setLoading(false); // Set loading to false even on error
            }
        };

        fetchPets();
    }, []); // Empty dependency array so it runs only once

    if (loading) {
        return <p>Loading pets...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    // Safeguard to handle non-array values
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
