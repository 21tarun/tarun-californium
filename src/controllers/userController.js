
const userModel= require("../models/userModel")


const createUser = async function(req,res)
{
    const data =req.body
    const saveData=await userModel.create(data)
    res.send({msg:saveData})
}

module.exports.createUser= createUser























