const User = require('../models/User');
const Admin = require('../models/Admin');
const PetOwner = require('../models/PetOwner');
const Vet = require('../models/Vet');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ username, user_role: user.user_role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        const roleRoutes = {
            1: '/admin',
            2: '/vet',
            3: '/petOwner',
        };

        res.json({ token, redirect: roleRoutes[user.user_role] });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    login
};
