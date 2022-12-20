const customerModel =require("../models/customerModel")

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



const creatCustomer =async function(req,res)
{
    let data = req.body
    let customer_count = await customerModel.find().count()
    data.customerID = String(180000+customer_count)   
    
    if(data.mobileNUmber.length!=10){
        res.send({msg:"mobile Number not valid"})
        return }
    if(validateEmail(data.emailID) ==undefined){
        res.send({msg:"invalid email"})
        return
    }
    const saveData=await customerModel.create(data)    
    res.send({msg:saveData})
}

const getActiveCustomer =async function(req,res)
{
    const active_customer = await customerModel.find({status:"ACTIVE",isDeleted:false})
    res.send({msg:active_customer})
}
const deleteCustomer =async function(req,res){
    const data =await customerModel.findOneAndUpdate(
        {customerID:"180001"},
        {$set:{isDeleted:true}}
    )
    res.send({mes:"deleted Successfully", deleted_data:data})
}

module.exports.creatCustomer=creatCustomer
module.exports.getActiveCustomer=getActiveCustomer
module.exports.deleteCustomer=deleteCustomer