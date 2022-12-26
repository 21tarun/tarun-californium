
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
    const email =req.body.email
    const pass=req.body.password
    
    const user=await userModel.findOne({emailId:email,password:pass})
    if(!user) return res.send({msg:"login credential are invailid"})
    let token =await jwt.sign({userId:user._id.toString()},'californium-tarun')
    console.log(token)
    res.send({msg:user})
}

const userDetails =async function(req,res)
{
    const userId=req.params.userId
    const token=req.headers['x-auth-token']
    const decodedToken =await jwt.verify(token,'californium-tarun')
    if(!decodedToken) return res.send({msg:"first login"})
    const data =await userModel.findById(userId)
    res.send({msg:data})
}

module.exports.createUser= createUser
module.exports.login= login
module.exports.userDetails=userDetails























