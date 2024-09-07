const Pet = require('../models/Pet');
const petOwner = require('../models/PetOwner');

// Add Pet function
const addPet = async (req, res) => {
    const { name, species, breed, dob, age, gender, weight, ownerID } = req.body;

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

// Fetch all pets
const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find({}, { _id: 1, name: 1, species: 1 });
    res.json(pets);
  } catch (error) {
    console.error("Error fetching pets:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Fetch pets for a specific owner
const getPetsByOwner = async (req, res) => {
    const { ownerID } = req.params; // Extract ownerID from URL parameters

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

const getPetsCount = async (req, res) => {
    try {
      // Count the total number of documents in the Pet collection
      const count = await Pet.countDocuments({});
      res.json({ count });
    } catch (err) {
      // Log the actual error for debugging
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch pets count' });
    }
  };

// Fetch specific pet by ID
const getPetById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const pet = await Pet.findById(id);
      if (!pet) {
        return res.status(404).json({ error: "Pet not found." });
      }
      res.json(pet);
    } catch (error) {
      console.error("Error fetching pet:", error);
      res.status(500).json({ error: "Server error. Please try again later." });
    }
  };

  // Edit info of specific pet by ID
const editPetById = async (req, res) => {
    const { id } = req.params;
    const { name, species, breed, dob, age, gender, weight } = req.body;
  
    try {
      const pet = await Pet.findById(id);
      if (!pet) {
        return res.status(404).json({ error: 'Pet not found' });
      }
  
      pet.name = name;
      pet.species = species;
      pet.breed = breed;
      pet.dob = dob;
      pet.age = age;
      pet.gender = gender;
      pet.weight = weight;
  
      await pet.save();
  
      res.status(200).json(pet);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };

  // Delete specific vet by ID
const deletePetById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPet = await Pet.findByIdAndDelete(id);
    if (!deletedPet) {
      return res.status(404).json({ error: "Pet not found." });
    }
    res.json({ message: "Pet deleted successfully." });
  } catch (error) {
    console.error("Error deleting Pet:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};
  

module.exports = {
    addPet,
    getPetsByOwner,
    getPetsCount,
    getPetById,
    editPetById,
    deletePetById,
    getAllPets,
};