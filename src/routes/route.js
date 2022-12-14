const express = require('express');
const router = express.Router();

let person=[
    {   
        "name": "Sahana",
        "age": 21, 
        "votingStatus": true
    },
    {   
        "name": "noor",
        "age": 20, 
        "votingStatus": false
    },
    {   
        "name": "tarun",
        "age": 21, 
        "votingStatus": false
    },
    {   
        "name": "chelsi",
        "age": 20, 
        "votingStatus": true
    },
    {   
        "name": "Amisha",
        "age": 15, 
        "votingStatus": true
    },
    {   
        "name": "Sangeeta",
        "age": 17, 
        "votingStatus": true
    },
    {   
        "name": "Deepika",
        "age": 18, 
        "votingStatus": true
    }

]
router.post( "/persons", function (req, res){
    let votingAge= req.query.votingAge

    let finalArr= []
    for( i=0 ; i<person.length ; i++){
        if ( person[i].age > votingAge )
        {
            person[i]["votingStatus"]=true
            finalArr.push(person[i])
        }
    }
    res.send( {data: finalArr , status: true})
})


module.exports = router;