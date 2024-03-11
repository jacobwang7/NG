const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupInviteSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
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

const GroupInvite = mongoose.model('GroupInvite', groupInviteSchema);

module.exports = GroupInvite;