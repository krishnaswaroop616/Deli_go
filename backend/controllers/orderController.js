const {orderModel} =require("../models/orderModel");
const {userModel}=require("../models/userModel");

const placeOrder=async(req,res)=>{
    try{
        const newOrder=new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
        res.json({success:true,message:"Order placed"});
    }
    catch(err){
        console.log("error");
        res.json({success:false,message:"Error"});
    }
}

const userOrder=async(req,res)=>{

    try{
        const orders=await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders});
    }
    catch(err){
        console.log("error");
        res.json({success:false,message:"error"});
    }
}

const allOrders=async(req,res)=>{
    try{
        const orders =await orderModel.find();
        res.json({success:true,data:orders});
    }catch(err){
        console.log(err);
        res.json({success:true,message:"error"});
    }
}   

const deleteOrder=async(req,res)=>{
    try{
        const orderId=req.params.id;
        await orderModel.findByIdAndDelete(orderId);
        res.json({success:true,message:"Order deleted"});
    }
    catch(err){
        console.error(err);
        res.json({ success: false, message: "Failed to delete order" });
    }
}

module.exports={placeOrder,userOrder,allOrders,deleteOrder};