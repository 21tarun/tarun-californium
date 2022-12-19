const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")
const AuthorController= require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


//create books in database and retrieve the all books from the database
router.post("/createBook", BookController.createBook  )
router.post("/createAuthor", AuthorController.createAuthor  )
router.get("/chetanBhagatBooks", AuthorController.getChetanBhagatBooks  )
router.get("/twoStatesMovieDetails", AuthorController.getTwoStatesMovieDetails  )
router.get("/50_100rangeBooks", AuthorController.get50_100rangeBooks )




module.exports = router;