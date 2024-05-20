const express = require('express');
const router = express.Router();
const metroController = require('../controllers/metroController');

// Route to create a new metro
router.post('/createmetro', metroController.createmetro);

// Route to get all metros
router.get('/getmetros', metroController.getAllmetros);

// Route to get a single metro by ID
router.get('/getmetro/:id', metroController.getmetroById);

// Route to update a metro by ID
router.put('/updatemetro/:id', metroController.updatemetro);

// Route to delete a metro by ID
router.delete('/deletemetro/:id', metroController.deletemetro);

module.exports = router;