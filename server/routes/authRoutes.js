const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const vetController = require('../controllers/vetController');
const ownerController = require('../controllers/ownerController');

// Signup route
router.post('/signup', authController.signup);

// Login route
router.post('/login', authController.login);

// VetSignup route
router.post('/vetSignup', vetController.vetSignup);

// PetOwner route
router.get('/pet-owners', ownerController.getAllPetOwners);

router.get('/pet-owners/view-owner/:id', ownerController.getPetOwnerById);

module.exports = router;
