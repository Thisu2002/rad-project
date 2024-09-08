const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const vetController = require('../controllers/vetController');
const ownerController = require('../controllers/ownerController');
const VetAppcontroller = require('../controllers/VetAppcontroller');

// Signup route
router.post('/signup', authController.signup);

// Login route
router.post('/login', authController.login);

// VetSignup route
router.post('/vetSignup', vetController.vetSignup);

// PetOwner routes
router.get('/pet-owners', ownerController.getAllPetOwners);
router.get('/pet-owners/view-owner/:id', ownerController.getPetOwnerById);
router.delete('/pet-owners/:id', ownerController.deletePetOwnerById);

// Vet Appointments routes
router.get('/vet-appointments', VetAppcontroller.getAllAppointments);

// Add a new record to a specific appointment
router.post('/vet-appointments/:appointmentId/records', VetAppcontroller.addRecordToAppointment);

// Get all records for a specific appointment
router.get('/vet-appointments/:appointmentId', VetAppcontroller.getRecordsForAppointment);

router.get('/vet-appointments/upcoming', VetAppcontroller.getUpcomingAppointments);

// Route to update a specific record
router.put('/vet-appointments/:appointmentId/records', VetAppcontroller.updateAppointmentRecord);

// Delete a record from a specific appointment
router.delete('/vet-appointments/:appointmentId/records', VetAppcontroller.deleteAppointmentRecord);

// Get today's appointments
router.get('/vet-appointments/todays-appointments', VetAppcontroller.getTodaysAppointments);



module.exports = router;
