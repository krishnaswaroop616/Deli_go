import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate=useNavigate();

    const {url,setToken}=useContext(StoreContext);

    const [data,setData]=useState({
        email:"",
        password:""
    });

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        
        setData(data=>({...data,[name]:value}));
    }

    const onLogin=async(event)=>{
        event.preventDefault(); 
        let newUrl=`${url}/api/user/login`;
        const response=await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            alert("login successful");
            navigate("/");
        }
        else{
            alert(response.data.message);
        }
    }

    return (
        <div className='container col-4 offset-4 mt-3'>
            <h1 className='text-danger fw-semibold fs-1 mt-4'>Login on DeliGo</h1>
            <form  onSubmit={onLogin} className='needs-validation mt-3' noValidate>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input type='email' className='form-control' onChange={onChangeHandler} value={data.email} placeholder='Enter email'  name='email' id='email' required></input>
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' className='form-control' onChange={onChangeHandler} value={data.password} placeholder='Enter password'  name='password' id='password' required></input>
                </div>
                <button type='submit' className='btn btn-danger mb-3'>Login</button>
                <p className='mb-5'>Don't have an account? <Link to="/signup" className='text-danger text-decoration-underline' > Signup here</Link></p>
            </form>
        </div>
    )
}


export const SignUp = () => {

    const navigate=useNavigate();

    const {url,setToken}=useContext(StoreContext);

    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    });

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        
        setData(data=>({...data,[name]:value}));
    }

    const onSignup=async(event)=>{
        event.preventDefault(); 
        let newUrl=`${url}/api/user/signup`;
        const response=await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            navigate("/");
        }
        else{
            alert(response.data.message);
        }
    }


  
    return (
        <div className='container col-4 offset-4 mt-3'>
            <h1 className='text-danger fw-semibold fs-1 mt-4'>SignUp on DeliGo</h1>
            <form onSubmit={onSignup}  className='needs-validation mt-3' noValidate>
                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>Username</label>
                    <input type='text' className='form-control' placeholder='Enter username' onChange={onChangeHandler} value={data.name}  name='name' id='username' required></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input type='email' className='form-control' placeholder='Enter email' onChange={onChangeHandler} value={data.email}  name='email' id='email' required></input>
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' className='form-control' onChange={onChangeHandler}  value={data.password} placeholder='Enter password'  name='password' id='password' required></input>
                </div>
                <button type='submit' className='btn btn-danger mb-3'>Signup</button>
                <p className='mb-5'>Already have an account? <Link to="/login" className='text-danger text-decoration-underline' > Login here</Link></p>
            </form>
        </div>
    )
}

