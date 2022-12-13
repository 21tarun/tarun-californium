const express = require('express');
const router = express.Router();

const req = require('express/lib/request');
const { route } = require('express/lib/application');

router.get('/test-me', function(req, res){
    res.send("To test my API")
})

let players=[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
        "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
        "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
        "soccer"
        ]
    }
        
]




router.post('/players', function(req, res){
    const newObj=req.body
    for(let i=0;i<players.length;i++)
    {
        if(players[i].name == newObj.name)
        {
            res.send("User already exist")
            return
        }
    }
    players.push(newObj)
    // console.log(players)
    res.send({data:players,msg:"new user added successfully"})
    
})


module.exports = router;