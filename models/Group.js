const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Interest'
    }
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;