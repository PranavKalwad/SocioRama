const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confpassword:{
        type:String,
        required:true
    },
    hobby:{
        type:String
    },
    interest:{
        type:String
    },
    dob:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('signup-page1',signUpTemplate)
