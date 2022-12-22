const mid= function (req,res,next)
{
    const datetime= new Date();
    var ip = req.socket.remoteAddress
    var path =req.url
    console.log(datetime, ip, path)
    next()
}
module.exports.mid=mid