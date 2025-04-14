const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    address:{
        type:Object,
        requred:true
    },
    status:{
        type:String,
        default:"Food processing",
    },
    date:{
        type:Date,
        default:Date.now(),
    }
});

const orderModel=mongoose.models.orders ||mongoose.model("order",orderSchema);

module.exports={orderModel}