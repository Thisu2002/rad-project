const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const vetController = require('../controllers/vetController');
const ownerController = require('../controllers/ownerController');
const petController = require('../controllers/petController');
const appointmentController = require('../controllers/appointmentController');

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
router.get('/ownerProfile/:id', ownerController.getPetOwnerById);

// Delete pet owner
router.delete('/pet-owners/:id', ownerController.deletePetOwnerById);
router.delete('/ownerProfile/:id', ownerController.deletePetOwnerById);

// Edit PetOwner by Id
router.put('/ownerProfile/editProfile/:id', ownerController.editOwnerById);

// Fetch all vets
router.get('/vets', vetController.getAllVets);

router.get('/vets/view-vet/:id', vetController.getVetById);

// Delete vet
router.delete('/vets/:id', vetController.deleteVetById);

//Edit Vet by Id
router.put('/vets/edit-vet/:id', vetController.editVetById);

// Fetch pets by ownerID
router.get('/pets/:ownerID', petController.getPetsByOwner);

//add pet
router.post('/add-pet', petController.addPet);

// Get appointments count
router.get('/appointments/count', appointmentController.getAppointmentsCount);

// Get pets count
router.get('/pet/count', petController.getPetsCount);

// Get pet owners count
router.get('/pet-owners/count', ownerController.getOwnersCount);

// View pet by owner
router.get('/petOwner/viewPet/:id', petController.getPetById);

//Edit Pet by Id
router.put('/petOwner/editPet/:id', petController.editPetById);

// Delete Pet
router.delete('/petOwner/:id', petController.deletePetById);

// Fetch all pets
router.get('/admin-pets', petController.getAllPets);

// VET APPOINTMENTS

// Vet Appointments routes
router.get('/vet-appointments', appointmentController.getAllAppointments);

// Add a new record to a specific appointment
router.post('/vet-appointments/:appointmentId/records', appointmentController.addRecordToAppointment);

// Get all records for a specific appointment
router.get('/vet-appointments/:appointmentId', appointmentController.getRecordsForAppointment);

// Route to update a specific record
router.put('/vet-appointments/:appointmentId/records', appointmentController.updateAppointmentRecord);

// Delete a record from a specific appointment
router.delete('/vet-appointments/:appointmentId/records', appointmentController.deleteAppointmentRecord);

// Get today's appointments
router.get('/todays-appointments', appointmentController.getTodaysAppointments);


//APPOINTMENT

//make an appointment
router.post('/makeAppointment', appointmentController.makeAppointment);


module.exports = router;
