const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    age: {
        type: Number,
        required: false,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Users', userSchema);
