import React, { useEffect, useState, useContext } from 'react';
import "./Orders.css";
import axios from 'axios';

import { toast } from "react-toastify";

const Orders = ({ url }) => {

    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        try {
            const response = await axios.get(url + "/api/order/allorders");
            if (response.data.success) {
                setOrders(response.data.data);
            }
            else {
                toast.error("Error");
            }

        } catch (error) {
            console.error("Failed to fetch orders", error);
        }
    };

    const deleteOrder = async (orderId) => {
        try {
            const response = await axios.delete(`${url}/api/order/delete/${orderId}`);
            if (response.data.success) {
                toast.success("Order deleted");
                setOrders(prev => prev.filter(order => order._id !== orderId));
            } else {
                toast.error("Failed to delete");
            }
        } catch (err) {
            console.error(err);
            toast.error("Server error");
        }
    };


    useEffect(() => {
        fetchAllOrders();
    }, []);

    return (
        <div className='order-add'>
            <h3 className='fs-3 mx-5 mb-3'>Orders:  </h3>
            <div className='order-list'>
                {orders.map(((order, index) => {
                    return (
                        <div key={index} className='order-item'>
                            <i class="fa-solid fa-box me-2"></i>
                            <p className='order-item-food w-50'>
                                {order.items.map((item, index) => {
                                    if (index === order.items.length - 1) {
                                        return item.name + " x " + item.quantity;
                                    }
                                    else {
                                        return item.name + " x " + item.quantity + ", ";
                                    }
                                })}
                            </p>
                            <div className='d-flex justify-content-between align-items-baseline w-50'>
                                <p className='me-2'>Items: {order.items.length}</p>

                                <p>Total amount: &#8377; {order.amount}</p>

                                <button className="btn btn-danger btn-sm mx-2" onClick={() => deleteOrder(order._id)}>Delete</button>

                            </div>
                        </div>
                    )
                }))}
            </div>
        </div>
    );
};

export default Orders;
