const date = new Date();
const printDate =function()
{
    console.log(date);
}
const printMonth =function()
{
    const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    
    let month = date.getMonth();
    console.log(monthArr[month])
}

const getBatchInfo =function()
{
    console.log("Californium, W3D4, the topic for today is Nodejs module system")
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo