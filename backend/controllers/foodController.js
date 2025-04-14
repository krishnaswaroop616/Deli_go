const foodModel=require("../models/foodModel");
const fs=require("fs");

const addFood=async (req,res)=>{
    let image_filename=`${req.file.filename}`;
    const newFood=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    });

    try{
        await newFood.save();
        res.json({success:true,message:"Food added"});
    }
    catch(err){
        console.log("error",err);
        res.json({success:false,message:"Error"});
    }
}

const listFood=async(req,res)=>{
    try{
        const foodlist=await foodModel.find();
        res.json({success:true,data:foodlist});
    }   
    catch(err){
        console.log("Error",err);
        res.json({success:false,message:"Error"});
    }
}  

const removeFood=async(req,res)=>{
    try{
        
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Item deleted"});
    }
    catch(err){
        console.log("Error",err);
        res.json({success:false,message:"Error"});
    }
}

module.exports={addFood,listFood,removeFood};