const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventInviteSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
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

const EventInvite = mongoose.model('EventInvite', eventInviteSchema);

module.exports = EventInvite;