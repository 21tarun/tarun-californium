const cardModel = require("../models/cardModel")


const createCard = async function (req, res)
{
    const data =req.body
    const card_count =await cardModel.find().count()
    const final_id="CY"+String(1000+card_count) // CY1011
    data.cardNumber=final_id

    const saveData=await cardModel.create(data)
    res.send({msg:saveData})
}

const getCardList =async function(req,res)
{
    const data = await cardModel.find()
    res.send({msg:data})
}

module.exports.createCard=createCard
module.exports.getCardList=getCardList