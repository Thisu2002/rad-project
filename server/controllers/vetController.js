const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Vet = require('../models/Vet');

// Signup function
const vetSignup = async (req, res) => {
    const { fullName, username, password, gender, address, contactNo, email, licenseNo, experience } = req.body;

    try {
        // Check if the email already exists in vet collection
        const existingOwner = await Vet.findOne({ email });
        if (existingOwner) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        // Check if the username already exists in User collection
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username is already taken' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({
            username,
            password: hashedPassword,
            user_role: 2,
        });
        await user.save();

        // Create a new vet
        const vet = new Vet({
            username,
            fullName,
            gender,
            address,
            contactNo,
            email,
            licenseNo,
            experience,
            user: user._id,
        });
        await vet.save();

        res.status(201).json({ message: 'Veterinarian registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Fetch all vets
const getAllVets = async (req, res) => {
    try {
      const vets = await Vet.find({}, { _id: 1, username: 1, fullName: 1 });
      res.json(vets);
    } catch (error) {
      console.error("Error fetching pet owners:", error);
      res.status(500).json({ error: "Server error. Please try again later." });
    }
  };
  
  // Fetch specific vet by ID
const getVetById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const vet = await Vet.findById(id);
      if (!vet) {
        return res.status(404).json({ error: "Vet not found." });
      }
      res.json(vet);
    } catch (error) {
      console.error("Error fetching vet:", error);
      res.status(500).json({ error: "Server error. Please try again later." });
    }
  };

module.exports = {
    vetSignup,
    getAllVets,
    getVetById
};
