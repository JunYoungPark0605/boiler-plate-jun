const { NativeError } = require('mongoose');
const mongoose = require('mongoosr');

const userSchema = mondoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        minLength: 5
    },
    lastname:{
        type: String,
        maxLength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp:{
        type: number
    }
});

const User = mongoose.model('User', userSchema)

module.exports = { User }