

const request1= async function (req, res) {

    
    res.send({msg: "request 1"})
}

const request2= async function (req, res) {
    
    res.send({msg:"request 2"})
}

const request3= async function (req, res) {
    
    res.send({msg:"request 3"})
}

const request4= async function (req, res) {
    
    res.send({msg:"request 4"})
}

module.exports.request1= request1
module.exports.request2= request2
module.exports.request3= request3
module.exports.request4= request4