import React, { useContext } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import {toast} from "react-toastify";

const Navbar = () => {
    const navigate=useNavigate();

    const {token,setToken}=useContext(StoreContext);

    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        toast.success("logout successful");
        navigate("/");
    }

    return (

        <nav className="navbar navbar-expand-md bg-body-secondary p-1 sticky-top ">
            <div className="container-fluid">
                <a className="navbar-brand fs-2 mb-2 fw-bold  text-danger ms-2 me-3" href="/">DeliGo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#exploremenu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact Us</a>
                        </li>
                    </ul>


                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className='nav-item mx-2'>
                            <a className='nav-link' href="#"><i className="fa-solid fa-magnifying-glass fs-5"></i></a>
                        </li>
                        <li className='nav-item mx-2'>
                            <Link className='nav-link'  to="/cart"><i className="fa-solid fa-cart-shopping fs-5"></i></Link>
                        </li>
                        <li className='nav-item me-3 mx-2'>
                            {!token?
                            <Link className='btn btn-outline-danger rounded-pill' to='/signup'>Sign Up</Link>:
                            <div className='navbar-profile'>
                                <p><i class="fa-solid fa-circle-user fs-2 text-danger mt-3 mb-1 ms-1"></i></p>
                                <ul className='navbar-profile-dropdown'>
                                    <li onClick={()=>navigate("/myorders")}><i class="fa-solid fa-bag-shopping"></i><span>Orders</span></li>
                                    <hr></hr>
                                    <li onClick={logout}><i class="fa-solid fa-arrow-right-from-bracket"></i><span>Logout</span></li>
                                </ul>
                            </div>   }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
