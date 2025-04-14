import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import {useNavigate} from 'react-router-dom';
import "./Cart.css";

const Cart = () => {
    const { cartItems, food_list, removeFromCart,cartItemsList,totalItems,totalPrice ,url} = useContext(StoreContext);

   

    const navigate=useNavigate();

    return (
        <div className='container'>
            <h2 className='text-danger fw-semibold mt-4 mb-4 text-center'>Your Cart</h2>

            <table class="table table-bordered  align-middle ">
                <thead className='table-active'>
                    <tr className='text-center'>
                        <th scope="col">Items</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope='col'>Total</th>
                        <th scope='col'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        food_list.map((item, index) => {
                            if (cartItems[item._id] > 0) {
                                return (
                                    <tr key={index}>
                                        <td className='text-center cart-image'><img src={url+"/images/"+item.image}></img></td>
                                        <td className='text-center'>{item.name}</td>
                                        <td className='text-center'>&#8377; {item.price}</td>
                                        <td className='text-center'>{cartItems[item._id]}</td>
                                        <td className='text-center'>&#8377; {cartItems[item._id] * item.price}</td>
                                        <td className='text-center'><button className='btn btn-sm btn-outline-danger align-middle' onClick={() => removeFromCart(item._id)}>remove</button></td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table>
            <hr className='mb-5 mt-5'></hr>

            <div className="bg-light p-4 rounded  mb-5 col-4 offset-4">
                <h5 className="text-center mb-3 fw-semibold text-danger">Cart Summary</h5>
                <div className="d-flex justify-content-between fs-6 mb-1">
                    <span>Total Items:</span>
                    <span>{totalItems}</span>
                </div>
                <div className="d-flex justify-content-between fs-6 mb-1">
                    <span>Total Price:</span>
                    <span>&#8377; {totalPrice}</span>
                </div>
                <div className="d-flex justify-content-between fs-6 mb-1">
                    <span>Delivery fee: </span>
                    <span>&#8377; {cartItemsList.length>0?"45":"0"}</span>
                </div>
                <div className="text-center mt-4">
                    <button className="btn btn-danger" onClick={()=>navigate("/order")}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}


export default Cart;