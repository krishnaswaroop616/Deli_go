import React, { useContext, useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import "./FoodItem.css";
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ item }) => {
    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={url+"/images/"+item.image} alt=''></img>
                {
                    !cartItems[item._id] ? (
                        <img className="food-item-add" onClick={()=>addToCart(item._id)} src={assets.add_icon_white} alt='' />
                    ) : (
                        <div className='food-item-counter'>
                            <img src={assets.remove_icon_red} onClick={()=>removeFromCart(item._id)} alt='' />
                            <p>{cartItems[item._id]}</p>
                            <img src={assets.add_icon_green} onClick={()=>addToCart(item._id)} alt='' />
                        </div>
                    )
                }

            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{item.name}</p>
                    <img src={assets.rating_starts} alt=''></img>
                </div>
                <p className='food-item-desc text-secondary '>{item.description}</p>
                <p className='food-item-price text-danger'>&#8377;{item.price}</p>
            </div>
        </div>
    );
}

export default FoodItem;

