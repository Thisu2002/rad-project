const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const vetController = require('../controllers/vetController');
const POController = require('../controllers/POController');



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

router.get('/petOwnerProfile/view/:id',POController.getPOById);

router.put('/petOwnerProfile/edit/:id', POController.editPOById);


module.exports = router;
