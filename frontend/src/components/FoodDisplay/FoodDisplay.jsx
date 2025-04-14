import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import "./FoodDisplay.css";

const FoodDisplay=({category,setCategory})=>{
    const {food_list}=useContext(StoreContext);

    return (
        <div className='food-display'> 
            <h2 className='text-danger fw-semibold fs-1 text-center mb-2 '>Top dishes for you</h2>
            <div className="d-flex justify-content-center my-3">
                <button onClick={()=>setCategory("all")} className='btn btn-outline-danger  border-1 ' >Display all</button>
            </div>
            
            <p className='text-secondary text-center mb-5 fs-6'>Enjoy our most popular and delicious dishes, chosen just for you.</p>
            <div className='food-display-list'>
                {food_list.map((item,index)=>{
                    if(category==='all' || category===item.category){
                        return <FoodItem item={item} key={index}/>
                    }   
                    
                    
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;