const express = require('express');
const router = express.Router();

const requestController= require("../controllers/requestController")
const middleware=require("../middleware/middleware")



router.post("/request1",middleware.mid,requestController.request1  )
router.post("/request2",middleware.mid ,requestController.request2  )
router.get("/request3",middleware.mid ,requestController.request3  )

router.get("/request4",middleware.mid ,requestController.request4)



module.exports = router;