const mongoose = require('mongoose')


const cardSchema= new mongoose.Schema({
    "cardNumber":{type:String, default:"0"},
    "cardType":{type:String, enum:["REGULAR","SPECIAL"]},
    "customerName":String,
    "status":{type:String, enum:["ACTIVE","INACTIVE"], default:"ACTIVE"},
    "vision":String,
    "customerID":String
    

},{timestamps:true})

module.exports=mongoose.model('card',cardSchema)