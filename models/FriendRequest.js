const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendRequestSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    sentDate: {
        type: Date,
        default: Date.now()
    },
    open: {
        type: Boolean,
        default: true
    },
    accepted: {
        type: Boolean,
        default: null
    },
    closedDate: {
        type: Date,
        default: null
    }
});

const FriendRequest = mongoose.model('FriendRequest', friendRequestSchema);

module.exports = FriendRequest;