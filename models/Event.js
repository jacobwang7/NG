const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    location: {
        name: String,
        metro: {
            type: Schema.Types.ObjectId,
            ref: 'Metro'
        }
    },
    description: {
        type: String,
        required: false,
    },
    time: {
        type: Date,
        default: null
    },
    public: {
        type: Boolean,
        default: false
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;