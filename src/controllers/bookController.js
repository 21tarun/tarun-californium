const bookModel=require("../models/bookModel")

// create book
const createBook= async function (req, res) {
    let data= req.body
    if(data.author_id){
        let savedData= await bookModel.create(data)
        res.send({msg: savedData})
    }    
    else 
        res.send({msg:"entry not valid"})
}

module.exports.createBook= createBook
