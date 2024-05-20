const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metroSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cities: [{
        name: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }
    }],
    states: [{
        name: {
            type: String,
            required: true
        }
    }]
});

const Metro = mongoose.model('Metro', metroSchema);

module.exports = Metro;