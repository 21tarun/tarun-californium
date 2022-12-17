const mongoose = require('mongoose')


const bookSchema= new mongoose.Schema({
    "bookName":{
        type:String,
        required:true
    },
    "authorName": String,
    "prices":{
        indianPrice:String,
        europeanPrice:String
    },
    "tags":[String],
    "totalPages":Number,
    "stockAvailable":Boolean,
    "year":{
        type:Number,
        default:2021
    }

},{timestamps:true})

module.exports=mongoose.model('book',bookSchema)