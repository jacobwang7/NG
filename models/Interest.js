const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interestSchema = new Schema({
    interestType: {
        type: String,
        required: true
    },
    groups: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;