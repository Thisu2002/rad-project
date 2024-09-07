const mongoose = require('mongoose');

const PetOwnerSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    contactNo: { type: Number, required: true },
    gender: { type: String, required: true},
}, {
    collection: 'petOwner'
});

module.exports = mongoose.model('PetOwner', PetOwnerSchema);
