const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")


const middleware =require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser)
router.post("/login", userController.login)
router.get("/user/:userId",middleware.mid1, userController.userDetails)
router.put("/user/:userId",middleware.mid1 ,userController.updateUserDetails)
router.put("/user/:userId/createPosts",middleware.mid1 ,userController.createNewPost)
router.delete("/user/:userId", middleware.mid1,userController.deleteUser)

module.exports = router;