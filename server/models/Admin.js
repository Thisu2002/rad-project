const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
}, {
    collection: 'admin'
});

module.exports = mongoose.model('Admin', AdminSchema);
