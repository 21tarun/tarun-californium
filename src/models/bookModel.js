const mongoose = require('mongoose')


const bookSchema= new mongoose.Schema({
    "bookName":String,
    "authorName":{type:String,
                  required:true},
    "category":{type:String,
                enum:["Horror","love story","Classical","Adventure","Crime"],
                },
    "year":Number

},{timestamps:true})

module.exports=mongoose.model('book',bookSchema)