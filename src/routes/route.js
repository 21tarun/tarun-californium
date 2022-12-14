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
        ],
        "bookingId":"1"
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
        "soccer"
        ],
        "bookingId":"2"
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
        "soccer"
        ],
        "bookingId":""

    }
        
]


let bookingDetails=[
    {
        "bookingNumber": 1,
         "sportId":"",
         "centerId": "",
        "type": "private",
        "slot": "16286598000000",
        "bookedOn": "31/08/2021",
        "bookedFor": "01/09/2021"
    },
    {
        "bookingNumber": 2,
         "sportId":"",
         "centerId": "",
        "type": "private",
        "slot": "16286598000000",
        "bookedOn": "31/08/2021",
        "bookedFor": "01/09/2021"
    }

]

// problem statement 1


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



// problem statement 2
router.post('/players/:playerName/bookings',function(req ,res){
    for(let i=0;i<players.length;i++)
    {
        if(players[i].name==req.params.playerName)
        {
            if(players[i].bookingId !="")
            {
                for(let j=0;j<bookingDetails.length;j++)
                {
                    if(bookingDetails[j].bookingNumber==players[i].bookingId)
                    {
                        res.send(`you already done with your booking`)
                        return
                    }
                }
                bookingDetails.push(req.body)
                players[i]["bookingId"]=req.body.bookingId
                res.send({mes:"your booking details is", bookingDetails: bookingDetails})
                return
            }
            bookingDetails.push(req.body)
            players[i]["bookingId"]=req.body.bookingId
            res.send({mes:"your booking details is", bookingDetails: bookingDetails})
            return

        }
   
    }
    res.send(`create your profile by clicking on player`)
    return
})

router.post('/players/:playerName/bookings/:bookingId', function(req, res){
    const playerName=req.params.playerName

    for(let i=0;i<players.length;i++)
    {
        if(players[i].name == playerName)
        {
           
           
            if(players[i].bookingId !="")
            {
                for(let j=0;j<bookingDetails.length;j++)
                {
                    if(bookingDetails[j].bookingNumber==players[i].bookingId)
                    {
                        if(bookingDetails[j].bookingNumber==req.params.bookingId)
                        {
                            res.send({mes:"your booking details is for id you entered:", bookingDetails:bookingDetails[j]})
                            return
                        }
                        else{
                            res.send({mes:"you entered wrong booking id....your booking details is:", bookingDetails:bookingDetails[j]})
                            return
                        }

                    }
                }    
            }
            else{
                res.send({mes:"please done your booking.....by clicking on 'booking"})
                return
            }

           
       
        }
    }

    res.send(`${playerName} not exist in players data....you need to create profile by clicking "player"`)
    return
    
})




module.exports = router;