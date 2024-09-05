// controllers/PetController.js
const Pet = require('../models/Pet'); // Replace with actual path to your Pet model

exports.getPetsCount = async (req, res) => {
  try {
    const count = await Pet.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pets count' });
  }
};
