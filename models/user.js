const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String, 
    googleId: {type: String, required: true},
    name: String,
    email: String,
    avatar: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)