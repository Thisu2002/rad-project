const Pet = require('../models/Pet');
const petOwner = require('../models/PetOwner');

// Add Pet function
const addPet = async (req, res) => {
    const { name, species, breed, dob, age, gender, weight, ownerID } = req.body;

    // Check if any required fields are missing
    // if (!name || !species || !breed || !dob || !age || !gender || !weight) {
    //     return res.status(400).json({ error: 'All fields are required.' });
    // }

    try {
        // Verify if the pet owner exists
        const owner = await petOwner.findById(ownerID);
        if (!owner) {
            return res.status(404).json({ error: 'Pet owner not found.' });
        }

        // Create a new pet
        const pet = new Pet({
            name,
            species,
            breed,
            dob,
            age,
            gender,
            weight,
            owner: ownerID, // Link pet owner to pet
        });
        await pet.save();

        res.status(201).json({ message: 'Pet added successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Fetch pets for a specific owner
const getPetsByOwner = async (req, res) => {
    const { ownerID } = req.params; // Extract ownerID from URL parameters
    console.log("Owner ID:", ownerID);

    try {
        // Find all pets belonging to the specified owner
        const pets = await Pet.find({ owner: ownerID });

        if (pets.length === 0) {
            return res.status(404).json({ message: 'No pets found for this owner.' });
        }

        res.status(200).json({ pets });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error while fetching pets.' });
    }
};

module.exports = {
    addPet,
    getPetsByOwner, // Export the new function
};
