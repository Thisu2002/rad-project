const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const PetOwner = require('../models/PetOwner');
const mongoose = require('mongoose');

// Fetch specific vet by ID
const getPOById = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format." });
    }

    try {
      const po = await PetOwner.findById(id);
      if (!po) {
        return res.status(404).json({ error: "Pet owner not found." });
      }
      res.json(po);
    } catch (error) {
      console.error("Error fetching pet owner:", error);
      res.status(500).json({ error: "Server error. Please try again later." });
    }
};

// Edit info of specific PO by ID
const editPOById = async (req, res) => {
    const { id } = req.params;
    const { fullName, username, password, gender, address, contactNo, email } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format." });
    }

    try {
      const po = await PetOwner.findById(id);
      if (!po) {
        return res.status(404).json({ error: 'Pet Owner not found' });
      }
  
      if (email !== po.email) {
        const existingPetOwnerWithEmail = await PetOwner.findOne({ email });
        if (existingPetOwnerWithEmail) {
          return res.status(400).json({ error: 'Email is already registered to another pet owner' });
        }
      }
  
      // Update password if provided
      if (password) {
        const user = await User.findOne({ username: po.username });
        if (user) {
          const hashedPassword = await bcrypt.hash(password, 10);
          user.password = hashedPassword;
          await user.save();
        }
      }
  
      po.fullName = fullName;
      po.username = username;
      po.gender = gender;
      po.address = address;
      po.contactNo = contactNo;
      po.email = email;
      
  
      await po.save();
  
      res.status(200).json(po);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
module.exports = {
    getPOById,
    editPOById

    
    // other exports
};
