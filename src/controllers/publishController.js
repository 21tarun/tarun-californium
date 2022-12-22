const publisherModel = require("../models/publisherModel")



const createPublisher= async function(req,res)
{
    const data =req.body
    const created_data= await publisherModel.create(data)
    res.send({msg:created_data})
}

module.exports.createPublisher=createPublisher