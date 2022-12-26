const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    UserName:{ type:String, required:true},
    emailId:{ type:String, required:true},
    password:{ type:String, required:true},
    DOB:String,
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },


}, { timestamps: true });

module.exports = mongoose.model('user1', userSchema) 