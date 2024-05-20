const express = require('express');
const router = express.Router();
const metroController = require('../controllers/metroController');

// Route to create a new metro
router.post('/createMetro', metroController.createMetro);

// Route to get all metros
router.get('/getMetros', metroController.getAllMetros);

// Route to get a single metro by ID
router.get('/getMetro/:id', metroController.getMetroById);

// Route to update a metro by ID
router.put('/updateMetro/:id', metroController.updateMetro);

// Route to delete a metro by ID
router.delete('/deleteMetro/:id', metroController.deleteMetro);

module.exports = router;