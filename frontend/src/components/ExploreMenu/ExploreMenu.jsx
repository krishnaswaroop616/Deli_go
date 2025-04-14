import React from 'react';
import "./ExploreMenu.css";
import {menu_list} from "../../assets/frontend_assets/assets"

const ExploreMenu=({category,setCategory})=>{
    return (
        <div className='explore-menu text-center mt-5 ' id='exploremenu'>
            <h1 className='text-danger fs-1 mb-3 fw-semibold'>Explore our menu</h1>
            <p className='explore-menu-text fs-5 text-secondary mb-4'>Discover a variety of delicious dishes crafted with the finest ingredients. From quick bites to gourmet meals, we have something for every craving!</p>
            <div className="explore-menu-list  ">
                {menu_list.map((item,index)=>{
                    return (
                        <div key={index}  className={category===item.menu_name?"explore-menu-list-item  active":"explore-menu-list-item "}   onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)}>
                            <img src={item.menu_image} alt=''></img>
                            <p className='text-secondary fs-6 mb-0'>{item.menu_name}</p>
                        </div>
                    );
                    
                })}
            </div>
            
        </div>
    )
}


export default ExploreMenu;