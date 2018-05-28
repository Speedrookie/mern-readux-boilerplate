const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    uuID: String,
    strategyID: String,
    strategyType: String,
    email: String ,
    firstName: String,
    lastName: String,
    displayName: String,
    language: String, 
    joined: Date,
    lastLogin: Date
});

mongoose.model('users', userSchema);