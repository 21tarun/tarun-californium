const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore');
const { movieObjArr } = require('../films/films');




router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)


    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})

router.get('/', function(req, res){
    
    res.send("@ Home Page")
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})






const moviesarr=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
router.get('/movies', function(req, res){
    res.send(moviesarr)
})

// 2 and 3 problem combined
router.get('/movies/:indexNumber', function(req, res){
    if(req.params.indexNumber<moviesarr.length && req.params.indexNumber>=0 )
    {
        res.send(moviesarr[req.params.indexNumber])
    }
    else{
        res.send("Use a valid index")
    }
})


router.get('/films', function(req, res){
    res.send(movieObjArr)
})

router.get('/films/:filmId', function(req, res){
    let i
    for(i=0;i<movieObjArr.length;i++)
    {
        if(req.params.filmId==movieObjArr[i].id)
        {
            res.send(movieObjArr[i].name)
            return
        }
        
    }
    if(i==movieObjArr.length )
    {
        res.send("No movie exists with this id")
    }

})



module.exports = router;