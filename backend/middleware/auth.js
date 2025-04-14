const jwt=require("jsonwebtoken");

const authMiddleware=async(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.json({success:false,message:"Not authorised"});
    }
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId=decode.id;
        next();
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"});
    }
}

module.exports={authMiddleware};