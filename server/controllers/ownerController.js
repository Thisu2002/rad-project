const PetOwner = require("../models/PetOwner");

// Fetch all pet owners
exports.getAllPetOwners = async (req, res) => {
  try {
    const petOwners = await PetOwner.find({}, { _id: 1, username: 1, fullName: 1 });
    res.json(petOwners);
  } catch (error) {
    console.error("Error fetching pet owners:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Fetch specific pet owner by ID
exports.getPetOwnerById = async (req, res) => {
  const { id } = req.params;

  try {
    const petOwner = await PetOwner.findById(id);
    if (!petOwner) {
      return res.status(404).json({ error: "Pet owner not found." });
    }
    res.json(petOwner);
  } catch (error) {
    console.error("Error fetching pet owner:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

