const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PetOwner',
    required: true
  }
}, {
    collection: 'pet'
  });

module.exports = mongoose.model('Pet', PetSchema);
