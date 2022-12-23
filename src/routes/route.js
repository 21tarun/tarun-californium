const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const userController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController = require ("../controllers/orderController")

const mid =require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser",mid.isFreeAppUserValidation,  userController.createUser)
router.post("/createProduct", productController.createProduct)
router.post("/createOrder",mid.isFreeAppUserValidation,mid.userValidation,mid.productValidation, orderController.createOrder)

module.exports = router;