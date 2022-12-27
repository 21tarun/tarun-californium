const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName:String,
    lastName:String,
    mobile:String,
    emailId:{ type:String, required:true},
    password:{ type:String, required:true},
    age:Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    posts:{
        type:[String],
        default:[]
    }


}, { timestamps: true });

module.exports = mongoose.model('user1', userSchema) 