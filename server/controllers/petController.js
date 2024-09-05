const Pet = require('../models/Pet');
const petOwner = require('../models/PetOwner');

// Add Pet function
const addPet = async (req, res) => {
    const { name, species, breed, dob, age, gender, ownerID } = req.body;

    // Check if any required fields are missing
    if (!name || !species || !breed || !dob || !age || !gender || !ownerID) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {

        // Verify if the pet owner exists
        const owner = await petOwner.findById(ownerID);
        if (!owner) {
            return res.status(404).json({ error: 'Pet owner not found.' });
        }

        // Create a new pet owner
        const pet = new Pet({
            name,
            species,
            breed,
            dob,
            age,
            gender,
            owner: ownerID, // Link pet owner to pet
        });
        await pet.save();

        res.status(201).json({ message: 'Pet added successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


module.exports = {
    addPet,
};
