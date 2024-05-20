const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metroSchema = new Schema({
    cities: [{
        name: String,
        state: String,
        required: true
    }],
    States: [{
        name: String,
        required: true
    }],
});

const Metro = mongoose.model('Metro', metroSchema);

module.exports = Metro;