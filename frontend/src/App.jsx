import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route  } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import {Login,SignUp} from "./components/SignUp/Login.jsx";
import MyOrders from "./pages/MyOrders/MyOrders.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App=()=>{
  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order" element={<PlaceOrder/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/myorders" element={<MyOrders/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;