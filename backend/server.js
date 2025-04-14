require("dotenv").config();
const express=require("express");
const cors=require("cors");
const conntectDB=require("./db.js");
const { foodRouter } = require("./routes/foodRoute.js");
const {userRouter}=require("./routes/userRoute.js");
const { cartRouter } = require("./routes/cartRoute.js");
const { orderRouter } = require("./routes/orderRoute.js");


const app=express();
const port=process.env.PORT || 4000;

app.use(express.json());
app.use(cors());


app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"));

app.use("/api/user",userRouter);

app.use("/api/cart",cartRouter);

app.use("/api/order",orderRouter);

app.get("/",(req,res)=>{
    res.send("API working");
});


app.listen(port,()=>{
    console.log("server listening on port 4000");
    conntectDB(process.env.MONGO_URI);
});