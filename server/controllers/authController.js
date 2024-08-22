    // const User = require('../models/User');
    // const Admin = require('../models/Admin');
    // const PetOwner = require('../models/PetOwner');
    // const Vet = require('../models/Vet');
    // const jwt = require('jsonwebtoken');

    // const login = async (req, res) => {
    //     const { username, password } = req.body;

    //     try {
    //         const user = await User.findOne({ username });
    //         if (!user || user.password !== password) {
    //             return res.status(400).json({ message: 'Invalid credentials' });
    //         }

    //         const token = jwt.sign({ username, user_role: user.user_role }, process.env.JWT_SECRET, {
    //             expiresIn: '1h',
    //         });

    //         const roleRoutes = {
    //             1: '/admin',
    //             2: '/vet',
    //             3: '/petOwner',
    //         };

    //         res.json({ token, redirect: roleRoutes[user.user_role] });
    //     } catch (err) {
    //         res.status(500).json({ message: 'Server error' });
    //     }
    // };

    // module.exports = {
    //     login
    // };


// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const PetOwner = require('../models/PetOwner');

// Signup function
const signup = async (req, res) => {
    const { fullName, username, password, address, contactNo, email } = req.body;

    try {
        // Check if the email already exists in PetOwner collection
        const existingOwner = await PetOwner.findOne({ email });
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
            user_role: 3, // Setting user_role to 3 for pet owners
        });
        await user.save();

        // Create a new pet owner
        const petOwner = new PetOwner({
            fullName,
            address,
            contactNo,
            email,
            user: user._id, // Link pet owner to user
        });
        await petOwner.save();

        res.status(201).json({ message: 'Pet owner registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Login function
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
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
    signup,
    login,
};
