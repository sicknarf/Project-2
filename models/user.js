const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String, // we expect this to be google username
    // requests: { type: Number,
    //             default: 0},
    googleId: {type: String, required: true},
    name: String,
    email: String,
    avatar: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)