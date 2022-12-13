const express = require('express');
const router = express.Router();

const req = require('express/lib/request');
const { route } = require('express/lib/application');

router.get('/test-me', function(req, res){
    res.send("To test my API")
})

router.post('/test', function(req, res){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].name == obj.name)
        {
            res.send("User already exist")
            return
        }
    }
    arr.push(obj)
    res.send(`${arr}`)
    
})


module.exports = router;