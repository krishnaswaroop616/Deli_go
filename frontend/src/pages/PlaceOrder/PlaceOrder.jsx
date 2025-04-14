import React, { useContext, useEffect,useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

    const navigate=useNavigate();

    const { cartItemsList, totalItems, totalPrice,token,food_list,cartItems,url } = useContext(StoreContext);

    const [data,setData]=useState({
        fullname:"",
        mobilenumber:"",
        address:"",
        pincode:"",
    });

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}));
    }

    const placeOrder=async(event)=>{
        event.preventDefault();
        let orderItems=[];
        food_list.map((item)=>{
            if(cartItems[item._id]>0){
                let itemInfo=item;
                itemInfo["quantity"]=cartItems[item._id]; 
                orderItems.push(itemInfo);
            }
        })
        let orderData={
            adddress:data,
            items:orderItems,
            amount:totalPrice+45,

        }
        let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
        toast.success("Order placed");
        navigate("/");
    }

    useEffect(()=>{
        if(!token){
            navigate("/cart");
        }
        else if(totalItems===0){
            navigate("/cart");
        }
    },[token]);

   
    return (
        <div>
            <div className="place-order container mt-5 mb-5">
                <h2 className="text-center text-danger mb-4">Place Your Order</h2>
                <div className='d-flex justify-content-around align-center'>
                    <div className="delivery-address mb-4 col-4 offset-1">
                        <h4>Delivery Details</h4>
                        <form onSubmit={placeOrder}>
                            <input type="text" className="form-control mb-2" name='fullname' onChange={onChangeHandler} value={data.fullname} placeholder="Full Name" required />
                            <input type="text" className="form-control mb-2" name='mobilenumber' onChange={onChangeHandler} value={data.mobilenumber} placeholder="Mobile Number" required />
                            <input type="text" className="form-control mb-2" name='address' onChange={onChangeHandler} value={data.address} placeholder="Address" required />
                            <input type="text" className="form-control mb-2" name='pincode' onChange={onChangeHandler} value={data.pincode} placeholder="Pincode" required />
                            <button className="btn btn-danger w-50 mt-3">Place Order</button>
                        </form>
                    </div>


                    <div className="payment-method mb-4 col-4 offset-1">
                        <h4>Payment Method</h4>
                        <div>
                            <input type="radio" name="payment" checked /> Cash on Delivery
                        </div>
                        <hr className='mt-4'></hr>
                        <div className="d-flex justify-content-between fs-6 mb-1 mt-4 ">
                            <span>Total Items:</span>
                            <span>{totalItems}</span>
                        </div>
                        <div className="d-flex justify-content-between fs-6 mb-1">
                            <span>Total Price:</span>
                            <span>&#8377; {totalPrice}</span>
                        </div>
                        <div className="d-flex justify-content-between fs-6 mb-1">
                            <span>Delivery fee: </span>
                            <span>&#8377; {cartItemsList.length > 0 ? "45" : "0"}</span>
                        </div>
                        <hr className='mt-4'></hr>
                    </div>


                </div>




            </div>



        </div>


    )
}


export default PlaceOrder;