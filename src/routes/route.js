const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// create new User in database and retrieve the users from the database
router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

//create books in database and retrieve the all books from the database
router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

module.exports = router;