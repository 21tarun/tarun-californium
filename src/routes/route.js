const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")


const mid =require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser)
router.post("/login", userController.login)
router.get("/user/:userId", userController.userDetails)

module.exports = router;