const express=require("express");
const {authMiddleware}=require("../middleware/auth");
const {placeOrder, userOrder, allOrders,deleteOrder}=require("../controllers/orderController");

const orderRouter=express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);

orderRouter.post("/userorders",authMiddleware,userOrder);

orderRouter.get("/allorders",allOrders);

orderRouter.delete("/delete/:id",deleteOrder);

module.exports={orderRouter};