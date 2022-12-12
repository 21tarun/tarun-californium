const express = require('express');
const router = express.Router();

const req = require('express/lib/request');
const { route } = require('express/lib/application');



router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})


router.get("/sol1",function(req,res){
    let arr1=[1,2,3,5,6,7] //find missing num from this array
    let arr1Sum= arr1.reduce((a,b)=>a+b,0)
    let findMissing
    let a = arr1[0]
    let d=arr1[1]-arr1[0]
    let n=arr1.length +1 // here i added 1 :-> we know in our given array one value is missing.
    let sumOfN= ((2*a + (n-1)*d)*n)/2
    findMissing =sumOfN -arr1Sum
    res.send(`missing value is ${findMissing} `)

})
router.get("/sol2",function(req,res){
    let arr1=[33, 34, 35, 37, 38] //find missing num from this array
    let arr1Sum= arr1.reduce((a,b)=>a+b,0)
    let findMissing
    let a = arr1[0]
    let d=arr1[1]-arr1[0]
    let n=arr1.length +1 // here i added 1 :-> we know in our given array one value is missing.
    let sumOfN= ((2*a + (n-1)*d)*n)/2
    findMissing =sumOfN -arr1Sum
    res.send(`missing value is ${findMissing} `)

})
module.exports = router;