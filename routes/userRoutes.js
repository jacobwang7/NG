const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a new user
router.post('/createUser', userController.createUser);

// Route to get all users
router.get('/getUsers', userController.getAllUsers);

// Route to get a single user by ID
router.get('/getUser/:id', userController.getUserById);

// Route to update a user by ID
router.put('/updateUser/:id', userController.updateUser);

// Route to delete a user by ID
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;