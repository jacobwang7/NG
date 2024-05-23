const express = require('express');
const router = express.Router();
const friendRequestController = require('../controllers/friendRequestController');

// Route to create a new friend request
router.post('/createFriendRequest', friendRequestController.createFriendRequest);

// Route to accept or deny friend request
router.put('/acceptOrDenyFriendRequest/:id', friendRequestController.acceptOrDenyFriendRequest);

// Route to get sent friend requests
router.get('/getSentFriendRequests/:id', friendRequestController.getSentFriendRequests);

// Route to get received friend requests
router.get('/getReceivedFriendRequests/:id', friendRequestController.getReceivedFriendRequests);

// Route to get friend request by ID
router.get('/getFriendRequestById/:id', friendRequestController.getFriendRequestById);

// Route to delete a friend request
router.delete('/deleteFriendRequest/:id', friendRequestController.deleteFriendRequest);

module.exports = router;