const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    user_role: { type: Number, required: true },
}, {
    collection: 'user'
});

module.exports = mongoose.model('User', UserSchema);
