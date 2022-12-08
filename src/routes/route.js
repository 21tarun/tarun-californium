const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _lo = require('lodash')
// const _ = require('underscore')
const logger =require("../logger/logger")
const util =require("../util/helper")
const validator =require("../validator/formatter")

router.get('/test-me', function (req, res) {
    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)

    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)
    logger.welcome()
    util.printDate()
    util.printMonth()
    util.getBatchInfo()
    validator.trim("FunCtionUp     ")
    validator.changetoLowerCase("FunCtionUp")
    validator.changetoUpperCase("FunCtionUp")

    const yearMonth=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    console.log(_lo.chunk(yearMonth,4))

    const firstOddNum=[1,3,5,7,9,11,13,15,17,19]
    console.log(_lo.tail(firstOddNum))

    const arr1=[1,2,3]
    const arr2=[7,2,13,1]
    const arr3=[11,1,3,7,9]
    const arr4=[8,0,5]
    const arr5=[1,7,6,5]
    console.log(_lo.union(arr1,arr2,arr3,arr4,arr5))

    console.log(_lo.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))





    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})
router.get('/', function(req, res){
    
    res.send("This is my API's home")
})


module.exports = router;