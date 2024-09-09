const Pet = require('../models/Pet');
const petOwner = require('../models/PetOwner');
const Appointment = require('../models/Appointment');

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

// Delete specific pet by ID and related appointments
const deletePetById = async (req, res) => {
  const { id } = req.params; // Pet ID from params

  try {
    // Find and delete the pet
    const deletedPet = await Pet.findByIdAndDelete(id);
    if (!deletedPet) {
      return res.status(404).json({ error: "Pet not found." });
    }

    // Delete all appointments related to the petID
    await Appointment.deleteMany({ petID: id });

    res.json({
      message: "Pet and related appointments deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting Pet and appointments:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Get Pet ID by name
const getPetByName = async (req, res) => {
  const { petName } = req.params; // Get petName from URL parameters

  try {
    // Find the pet with the given name
    const pet = await Pet.findOne({ name: petName });

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    // Return the pet details (including ID)
    return res.status(200).json({
      petID: pet._id,
    });
  } catch (error) {
    console.error("Error finding pet by name:", error);
    return res.status(500).json({ message: "Server error" });
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
    getPetByName,
};