const authorModel=require("../models/authorModel")
const bookModel=require("../models/bookModel")

// create book
const createAuthor= async function (req, res) {
    let data= req.body
    
    if(data.author_id){
        let savedData= await authorModel.create(data)
        res.send({msg: savedData})
    }    
    else 
        res.send({msg:"entry not valid"})
}

const getChetanBhagatBooks= async function (req,res){
    let author_obj=await authorModel.findOne({author_name:"Chetan Bhagat"})
    let _id=author_obj.author_id
    let chetan_books=await bookModel.find({author_id:_id})
    res.send({mes:chetan_books})

}

const getTwoStatesMovieDetails=async function(req,res)
{
    let book_obj= await bookModel.findOneAndUpdate(
        {name:"Two states"},
        {$set:{price:100}},
        {new:true}
    
    )
    let _id=book_obj.author_id
    let authorDetails = await authorModel.findOne({author_id:_id})
    let newObj={
        "authorName":authorDetails.author_name,
        "updatePrice":book_obj.price

    }
    
    res.send({msg:newObj})
}

const get50_100rangeBooks = async function(req,res)
{
    let bookArr = await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    let authorArr=await authorModel.find()
    let rangeInAuthor=[]

    // if in author collection , author_id are  sorted (like 1,2,3,4,5,6....so on )
    for(let i=0;i<bookArr.length;i++)
    {
        let temp=authorArr[(bookArr[i].author_id)-1]
        rangeInAuthor.push(temp.author_name)
    }

    // if in author collection , author_id are not sorted (like 8,7,9,1,2 )
    // for(let i=0;i<bookArr.length;i++)
    // {   
    //     for(let j=0;j<authorArr.length;j++)
    //     {
    //         if(bookArr[i].author_id==authorArr[j].author_id)
    //         {
    //             rangeInAuthor.push(authorArr[j].author_name)

    //         }
    //     }
    // }
    res.send({mes:rangeInAuthor})
    
}

module.exports.createAuthor=createAuthor
module.exports.getChetanBhagatBooks=getChetanBhagatBooks
module.exports.getTwoStatesMovieDetails=getTwoStatesMovieDetails
module.exports.get50_100rangeBooks=get50_100rangeBooks