const mongoose=require("mongoose");

const connectDB=async(url)=>{
    await mongoose.connect(url);
    console.log("DB connected");
}

module.exports=connectDB;