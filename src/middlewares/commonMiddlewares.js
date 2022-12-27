const jwt =require('jsonwebtoken')


const mid1= async function(req,res,next){
    const token=req.headers['x-auth-token']
    const userIdToBePerformed =req.params.userId
    if(!token) return res.send({status:false,msg:"important header request is missing"})
    const decodedToken =await jwt.verify(token,'californium-tarun',function (error, decodedToken) {
        if (error)
          return res.send({ status: false, message: "token is invalid " });
        if(decodedToken.userId != userIdToBePerformed)
          return res.send({status:false, msg:"you are not authorized person to do this operation"})
        next()  
    })

}

module.exports.mid1=mid1