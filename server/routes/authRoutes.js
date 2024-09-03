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

// View PetOwner
router.get('/pet-owners/view-owner/:id', ownerController.getPetOwnerById);

// Delete pet owner
router.delete('/pet-owners/:id', ownerController.deletePetOwnerById);

module.exports = router;
