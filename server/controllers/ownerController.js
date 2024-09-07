const PetOwner = require("../models/PetOwner");
const User = require("../models/User");

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

// Delete specific pet owner by ID
exports.deletePetOwnerById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPetOwner = await PetOwner.findByIdAndDelete(id);
    if (!deletedPetOwner) {
      return res.status(404).json({ error: "Pet owner not found." });
    }
    res.json({ message: "Pet owner deleted successfully." });
  } catch (error) {
    console.error("Error deleting pet owner:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Edit info of specific owner by ID
exports.editOwnerById = async (req, res) => {
  const { id } = req.params;
  const { fullName, password, address, contactNo, email } = req.body;

  try {
    const owner = await PetOwner.findById(id);
    if (!owner) {
      return res.status(404).json({ error: 'Owner not found' });
    }

    if (email !== owner.email) {
      const existingOwnerWithEmail = await owner.findOne({ email });
      if (existingOwnerWithEmail) {
        return res.status(400).json({ error: 'Email is already registered to another owner' });
      }
    }

    // Update password if provided
    if (password) {
      const user = await User.findOne({ username: owner.username });
      if (user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();
      }
    }

    owner.fullName = fullName;
    owner.address = address;
    owner.contactNo = contactNo;
    owner.email = email;

    await owner.save();

    res.status(200).json(owner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// get owner count
exports.getOwnersCount = async (req, res) => {
  try {
    const count = await PetOwner.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pet owners count' });
  }
};