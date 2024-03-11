const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    birthday: {
        type: Date,
        required: true
    },
    joined: {
        type: Date,
        default: Date.now()
    },
    metro: {
        type: Schema.Types.ObjectId,
        ref: 'Metro'
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    groups: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }],
    public: {
        type: Boolean,
        default: true
    },
    viewedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    interests: [{
        type: Schema.Types.ObjectId,
        ref: 'Interest'
    }],
    introvert: {
        type: Boolean,
        default: null
    },
    extrovert: {
        type: Boolean,
        default: null
    },
    goingOut: {
        type: Boolean,
        default: null
    },
    chill: {
        type: Boolean,
        default: null
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;