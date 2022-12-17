const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


//create books in database and retrieve the all books from the database
router.post("/createBook", BookController.createBook  )
router.get("/bookList", BookController.bookList  )
router.post("/getBooksInYear/:year", BookController.getBooksInYear  )
router.post("/getParticularBooks", BookController.getParticularBooks  )
router.get("/getXINRBooks", BookController.getXINRBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)




module.exports = router;