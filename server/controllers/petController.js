const Pet = require('../models/Pet');
const petOwner = require('../models/PetOwner');

// Add Pet function
const addPet = async (req, res) => {
    const { name, species, breed, dob, age, gender, owner } = req.body;

    try {
        // Create a new pet owner
        const pet = new Pet({
            name,
            species,
            breed,
            dob,
            age,
            gender,
            owner: petOwner._id, // Link pet owner to pet
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
