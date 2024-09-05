const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
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
    type: Schema.Types.ObjectId,
    ref: 'PetOwner',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);
