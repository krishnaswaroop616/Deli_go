const {userModel}  = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt =require("bcryptjs"); 
const validator = require("validator"); 


const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}


const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User doesn't exist"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid email or password"});
        }

        const token=createToken(user._id);
        res.json({success:true,token});
    }
    catch(err){
        console.log(err);
        res.json({success:true,message:"Error"});
    }
}



const registerUser=async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"});
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"});
        }
        if(password.length<5){
            return res.json({success:false,message:"Please enter a strong password"});
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword
        });

        const user=await newUser.save(); 
        const token=createToken(user._id);
        res.json({success:true,token})
    }
    catch(err){
        console.log("error",err);
        res.json({success:false,message:"Error"});
    }
}


module.exports={loginUser,registerUser};