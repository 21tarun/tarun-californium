const { findOne, populate } = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if(book.author == undefined || book.publisher == undefined)
    {
        var x
        if(book.author) x="publisher id"
        else x="author id"
        res.send(x+" field is required")
        return
    }
    else{
        const author_data= await authorModel.findById(book.author)
        const pulisher_data= await publisherModel.findById(book.publisher)
        console.log(author_data)
        if(author_data == undefined || pulisher_data ==undefined)
        {
            var x
            if(author_data) x="publisher"
            else x="author"
            res.send(x+" is not present")
            return
        }
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate(["author","publisher"])
    res.send({data: books})
}

const BooksData = async function (req, res) {
    
    let specific_publisher=await publisherModel.find({name:{ '$in': ["Penguin","HarperCollins"] }})
    specific_publisher=specific_publisher.map(x=>x._id)
    let update_book1=await bookModel.updateMany(
        {publisher:{$in:specific_publisher}},
        {$set:{isHardCover:true}}
    )
    let specific_author = await authorModel.find({rating:{$gt:3.5}})
    specific_author=specific_author.map(x=>x._id)
    let update_book2=await bookModel.updateMany(
        {publisher:{$in:specific_author}},
        {$set:{$inc:{price:10}}}
    )
    let updated_data=await bookModel.find()
    res.send({data: updated_data})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.BooksData = BooksData



