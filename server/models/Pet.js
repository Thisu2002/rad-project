const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    species: { type: String, required: true },
    breed: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['M', 'F'], required: true },
    allergies: {type: String, required: true },
    chronicConditions: {type: String, required: true},
}, {
    collection: 'pet'
});

module.exports = mongoose.model('Pet', PetSchema);
