import React from 'react';
import "./Sidebar.css";
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-options'>
                <NavLink to="/add" className='sidebar-option text-decoration-none'>
                    <i class="fa-solid fa-circle-plus"></i>
                    <p className='text-secondary'>Add Items</p>
                </NavLink>
                <NavLink to="/list" className='sidebar-option  text-decoration-none'>
                    <i class="fa-solid fa-list"></i>
                    <p className='text-secondary'>List Items</p>
                </NavLink>
                <NavLink to="/orders" className='sidebar-option  text-decoration-none'>
                    <i class="fa-solid fa-square-check"></i>
                    <p className='text-secondary'>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;