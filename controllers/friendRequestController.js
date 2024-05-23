const FriendRequest = require('../models/FriendRequest');

exports.createFriendRequest = async (req, res) => {
    try {
        const newFriendRequest = new FriendRequest(req.body);
        await newFriendRequest.save();
        res.status(200).json(newFriendRequest);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.acceptOrDenyFriendRequest = async (req, res) => {
    try {
        const updatedFriendRequest = await FriendRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFriendRequest) {
            return res.status(404).json({ message: 'Friend Request not found' });
        }
        res.json(updatedFriendRequest);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getSentFriendRequests = async (req, res) => {
    try {
        const friendRequests = await FriendRequest.find()
            .where('from')
            .equals(req.params.id)
            .where('open')
            .equals(true);
        res.status(200).json(friendRequests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getReceivedFriendRequests = async (req, res) => {
    try {
        const friendRequests = await FriendRequest.find()
            .where('to')
            .equals(req.params.id)
            .where('open')
            .equals(true);
        res.status(200).json(friendRequests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getFriendRequestById = async (req, res) => {
    try {
        const friendRequest = await FriendRequest.findById(req.params.id);
        if (!friendRequest) {
            return res.status(404).json({ message: 'Friend Request not found' });
        }
        res.json(friendRequest);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteFriendRequest = async (req, res) => {
    try {
        const deletedFriendRequest = await FriendRequest.findByIdAndDelete(req.params.id);
        if (!deletedFriendRequest) {
            return res.status(404).json({ message: 'Friend Request not found' });
        }
        res.json({ message: 'Friend Request deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};