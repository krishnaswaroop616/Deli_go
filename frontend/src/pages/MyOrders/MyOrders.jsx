import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import "./MyOrders.css";

const MyOrders = () => {

    const { url, token,totalPrice } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className="container my-orders-container">
            <h2 className="mb-4">My Orders</h2>
            {data.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                data.map((order, index) => (
                    <div key={index} className="order-card shadow-sm p-3 mb-4 bg-white rounded">
                        <div className="order-header d-flex justify-content-between mb-2">
                            <div><b>Order ID:</b><i>{order._id.toUpperCase()}</i> </div>
                            
                        </div>
                        <div className="order-date mb-3 text-muted">
                            <small>{new Date(order.date).toLocaleString()}</small>
                        </div>
                        <div className="order-items">
                            {order.items.map((item, idx) => (
                                <div key={idx} className="order-item d-flex align-items-center mb-2">
                                    <img src={`${url}/images/${item.image}`} alt={item.name} className="order-item-img me-3" />
                                    <div>
                                        <div><strong>{item.name}</strong></div>
                                        <div>Qty: {item.quantity}</div>
                                        <div>&#8377; {item.price * item.quantity}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="order-total text-end mt-2">
                            <strong>Total: &#8377;{order.amount}</strong>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default MyOrders;