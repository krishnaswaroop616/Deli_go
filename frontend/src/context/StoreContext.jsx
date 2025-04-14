import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{

    const url="https://deli-go-backend.onrender.com";

    const [token,setToken]=useState("");

    const [cartItems,setCartItems]=useState({});

    const[food_list,setFoodList]=useState([]);

    const cartItemsList = food_list.filter(item => cartItems[item._id] > 0);
    const totalItems = cartItemsList.reduce((acc, item) => acc + cartItems[item._id], 0);
    const totalPrice = cartItemsList.reduce((acc, item) => acc + (item.price * cartItems[item._id]), 0);

    const addToCart= async (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const removeFromCart=async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        }
    }

    const fetchFoodList=async ()=>{
        const response=await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }

    const loadCartData=async(token)=>{  
        const response =await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }

    useEffect(()=>{
       
        async function loadData(){
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
    
            await fetchFoodList();
        }

        loadData();
    },[]);

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        cartItemsList,
        totalItems,
        totalPrice,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    );
}


export default StoreContextProvider;
