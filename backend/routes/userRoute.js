const express=require("express");
const {loginUser,registerUser} = require("../controllers/userController");

const userRouter=express.Router();


userRouter.post("/login",loginUser);

userRouter.post("/signup",registerUser);

module.exports={userRouter};