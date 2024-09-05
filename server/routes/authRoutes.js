const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const vetController = require('../controllers/vetController');
const ownerController = require('../controllers/ownerController');
const appointmentController = require('../controllers/appointmentController');
const petController = require('../controllers/petController');

// Signup route for general users (including admins)
router.post('/signup', authController.signup);

// Login route for authentication
router.post('/login', authController.login);

// Vet signup route
router.post('/vetSignup', vetController.vetSignup);

// Get all pet owners
router.get('/pet-owners', ownerController.getAllPetOwners);

// Get a single pet owner by ID
router.get('/pet-owners/view-owner/:id', ownerController.getPetOwnerById);

// Delete a pet owner by ID
router.delete('/pet-owners/:id', ownerController.deletePetOwnerById);

// Get all vets
router.get('/vets', vetController.getAllVets);

// Get a single vet by ID
router.get('/vets/view-vet/:id', vetController.getVetById);

// Delete a vet by ID
router.delete('/vets/:id', vetController.deleteVetById);

// Edit vet details by ID
router.put('/vets/edit-vet/:id', vetController.editVetById);

// Get appointments count
router.get('/appointments/count', appointmentController.getAppointmentsCount);

// Get pets count
router.get('/pets/count', petController.getPetsCount);

// Get pet owners count
router.get('/pet-owners/count', ownerController.getOwnersCount);

module.exports = router;
