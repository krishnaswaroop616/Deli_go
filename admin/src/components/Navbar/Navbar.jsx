import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='admin-navbar mt-1 mb-2 sticky-top border-bottom'>
            <div>
            <Link className='text-decoration-none' to="/"><h2 className="fs-2 text-danger fw-bold mx-3 mt-4 mb-0">DeliGo</h2></Link>
            <p className='fs-6 mt-0 lh-1 mb-4 mx-3'>admin-panel</p>
            </div>
            <div className="navbar-right me-3 mt-1 ">
                <div className="navbar-icons">
                    <i className="fa-solid fa-user-circle fs-5"></i>
                    <span className="fs-5 ms-1 text-secondary">Admin</span>
                </div>
            </div>

        </div>
    )
}

export default Navbar;