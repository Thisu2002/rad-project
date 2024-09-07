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



// Vet route
router.get('/vets', vetController.getAllVets);

router.get('/vets/view-vet/:id', vetController.getVetById);

// Delete vet
router.delete('/vets/:id', vetController.deleteVetById);

//Edit Vet by Id
router.put('/vets/edit-vet/:id', vetController.editVetById);


//Get PO 
router.get('/petOwnerProfile/view/:id', ownerController.getPOById);

//Edit PO by ID
router.put('/petOwnerProfile/edit/:id', ownerController.editPOById);

module.exports = router;
