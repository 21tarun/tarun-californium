const mongoose = require('mongoose')


const customerSchema= new mongoose.Schema({
    "firstName":String,
    "lastName":String,
    "mobileNUmber":{type:String, required: [false, "must be 10 digit long"]},
    "DOB":Date,
    "emailID":{type:String, required: [false, "abc@xyz.com"]},
    "address":String,
    "customerID":{type:String, default:"0"},
    "status":{type:String, enum:["ACTIVE","INACTIVE"]},
    "isDeleted":{type:Boolean, default:false}
    

},{timestamps:true})

module.exports=mongoose.model('customer',customerSchema)