const express = require('express');
const router = express.Router();


const customerController= require("../controllers/customerController")
const cardController= require("../controllers/cardController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createCustomer", customerController.creatCustomer  )
router.post("/createCard", cardController.createCard)
router.get("/activeCustomer", customerController.getActiveCustomer)
router.get("/deleteCustomer", customerController.deleteCustomer)
router.get("/cardList", cardController.getCardList)





module.exports = router;