const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "author1",
        required:true
    }, 
    price: Number,
    rating: Number,
    publisher: {
        type: ObjectId,
        ref: "publisher1",
        required:true
    },
    isHardCover :{
            type:Boolean,
            default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('book1', bookSchema)
