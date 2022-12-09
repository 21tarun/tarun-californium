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
const moviesarr=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
router.get('/movies', function(req, res){
    res.send(moviesarr)
})

router.get('/movies/:indexNumber', function(req, res){
    if(req.params.indexNumber<moviesarr.length)
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