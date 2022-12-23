const orderModel =require('../models/orderModel')
const userModel =require('../models/userModel')
const productModel =require('../models/productModel')

const createOrder =async function(req,res)
{
    const data =req.body
    if(req.headers.isfreeappuser=="true")
    {
        Object.assign(data,{isFreeAppUser:true,amount:0} );
        const saveData =await orderModel.create(data)
        return res.send({msg:saveData})
    }
    else{
        const userData= await userModel.findById(data.userId)
        const productData= await productModel.findById(data.productId)
        if(userData.balance>productData.price)
        {
            const updated_user = await userModel.findByIdAndUpdate(
                data.userId,
                {$inc:{balance:-productData.price}})

            data.amount= productData.price   
            const saveData =await orderModel.create(data)   
            return res.send({msg:saveData})



        }
        else{
            return res.send({msg:"not sufficient balance"})
        }
    }
    
    
    
}

module.exports.createOrder=createOrder