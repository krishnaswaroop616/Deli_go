const {userModel}=require("../models/userModel");

const addToCart=async (req,res)=>{
    try{
        let userData=await userModel.findById(req.body.userId );
        let cartData=await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,messsage:"Added to cart"});
    }
    catch(err){
          console.log("Error");
          res.json({success:false,message:"error"});
    }
}

const removeFromCart=async(req,res)=>{
    try{
        let userData=await userModel.findById(req.body.userId);
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed from cart"});
    }
    catch(err){
        console.log("error");
        res.json({success:false,message:"Error"});
    }

}

const fetchCart=async (req,res)=>{
    try{
        let userData=await userModel.findById(req.body.userId);
        let cartData=await userData.cartData;
        res.json({success:true,cartData});
    }
    catch(err){
        console.log("error");
        res.json({success:false,message:"Error"});
    }
}

module.exports={addToCart,removeFromCart,fetchCart};