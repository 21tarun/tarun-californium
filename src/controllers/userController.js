
const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')


const createUser = async function (req, res) {
    try {
        const data = req.body
        if (Object.keys(data).length == 0)
            return res.status(400).send({ msg: "you are sending request without data" })
        const saveData = await userModel.create(data)
        res.status(201).send({ msg: saveData })
    }
    catch (error) {
        res.status(400).send({ status: false, msg: error.message })
    }
}

const login = async function (req, res) {
    try {
        const email = req.body.emailId
        const pass = req.body.password
        if (!email) return res.status(400).send({ msg: "enter your regestered email to login" })
        if (!pass) return res.status(400).send({ msg: "enter your password to login" })
        const user = await userModel.findOne({ emailId: email, password: pass })
        if (!user) return res.status(400).send({ msg: "login credential are invailid" })
        let token = await jwt.sign({ userId: user._id.toString() }, 'californium-tarun')
        res.setHeader('x-auth-token',token)
        res.status(200).send({ status: true, data: token })
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const userDetails = async function (req, res) {
    try {
        const userId = req.params.userId
        const data = await userModel.findById(userId)
        res.status(200).send({ msg: data })
    }
    catch(error)
    {
        res.status(500).send({status:false, msg:error.message})
    }
}

const updateUserDetails = async function (req, res) {
    try{
        const userId = req.params.userId
        const dataForUpdate = req.body
    
        const UpdatedData = await userModel.findByIdAndUpdate(userId,
            { $set: dataForUpdate }
            , { new: true })
        res.status(200).send({ status: true, data: UpdatedData })
    }catch(error){
        res.status(500).send({status:false,msg:error.message})
    }
}

const deleteUser = async function (req, res) {
    try{
        const userId = req.params.userId

        const UpdatedData = await userModel.findByIdAndUpdate(userId,
            { $set: { isDeleted: true } }
            , { new: true })
        res.status(200).send({ msg: "your account has deleted" })
    }catch(error)
    {
        res.status(500).send({status:false,msg:error.message})
    }
}

const createNewPost = async function (req, res) {
    try{
        const userId = req.params.userId
        const message = req.body.message
        const user = await userModel.findById(userId)
        const userPosts = user.posts
        userPosts.push(message)
        const updatedUser = await userModel.findByIdAndUpdate(userId, { $set: { posts: userPosts } }, { new: true })
        res.status(201).send({ status: true, data: updatedUser })
    }catch(error){
        res.status(500).send({status:false,msg:error.message})
    }
}



module.exports.createUser = createUser
module.exports.login = login
module.exports.userDetails = userDetails
module.exports.updateUserDetails = updateUserDetails
module.exports.createNewPost = createNewPost
module.exports.deleteUser = deleteUser























