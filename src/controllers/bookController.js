const bookModel=require("../models/bookModel")

// create book
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

//gives all the books- their bookName and authorName only
const bookList= async function (req, res) {
    let allBooks= await bookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: allBooks})
}


const getBooksInYear= async function (req, res) {
    let year_=req.params.year
    let allBooks= await bookModel.find({year:{$eq:year_}})
    res.send({msg: allBooks})
}

const getParticularBooks= async function (req, res) {

    let query=req.body
    let allBooks= await bookModel.find(query)
    res.send({msg: allBooks})
}

const getXINRBooks= async function (req, res) {
    let allBooks= await bookModel.find({'prices.indianPrice':{$in:["100 Rupee","500 Rupee","300 Rupee"]}})
    res.send({msg: allBooks})
}


const getRandomBooks = async function (req, res) {
    let allBooks= await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg: allBooks})
}


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks = getRandomBooks 
