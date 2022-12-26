
const userModel= require("../models/userModel")
const jwt =require('jsonwebtoken')


const createUser = async function(req,res)
{
    const data =req.body
    const saveData=await userModel.create(data)
    res.send({msg:saveData})
}

const login = async function(req,res)
{
    const email =req.body.emailId
    const pass=req.body.password
    
    const user=await userModel.findOne({emailId:email,password:pass})
    if(!user) return res.send({msg:"login credential are invailid"})
    let token =await jwt.sign({userId:user._id.toString()},'californium-tarun')
    res.send({status:true,data:token})
}

const userDetails =async function(req,res)
{
    const userId=req.params.userId

    const data =await userModel.findById(userId)
    res.send({msg:data})
}

const updateUserDetails =async function(req,res)
{
    const userId=req.params.userId
    const dataForUpdate=req.body

    const UpdatedData =await userModel.findByIdAndUpdate(userId,
        {$set:dataForUpdate}
        ,{new:true})
    res.send({status:true,data:UpdatedData})
}

const deleteUser =async function(req,res)
{
    const userId=req.params.userId

    const UpdatedData =await userModel.findByIdAndUpdate(userId,
        {$set:{isDeleted:true}}
        ,{new:true})
    res.send({msg:"your account has deleted"})
}



module.exports.createUser= createUser
module.exports.login= login
module.exports.userDetails=userDetails
module.exports.updateUserDetails=updateUserDetails
module.exports.deleteUser=deleteUser























