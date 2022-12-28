const jwt =require('jsonwebtoken')


const mid1= async function(req,res,next){
   try{
    const token=req.headers['x-auth-token']
    const userIdToBePerformed =req.params.userId
    if(!token) return res.send({status:false,msg:"important header request is missing"})
    const decodedToken =await jwt.verify(token,'californium-tarun')
    if(!decodedToken) return res.send({ status: false, message: "token is invalid " })
    if(decodedToken.userId != userIdToBePerformed)
      return res.status(403).send({status:false, msg:"you are not authorized person to do this operation"})
    next()
    }
   catch(error)
   {
     return res.send({msg:error.message})
   }

}

module.exports.mid1=mid1


// function (error, decodedToken) {
//   if (error)
//     return res.send({ status: false, message: "token is invalid " });
//   if(decodedToken.userId != userIdToBePerformed)
//     return res.send({status:false, msg:"you are not authorized person to do this operation"})
//   next()  
// })