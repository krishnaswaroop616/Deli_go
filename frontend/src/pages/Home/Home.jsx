import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home=()=>{
    const [category,setCategory]=useState("all");
    return (
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category} setCategory={setCategory}/>
        </div>
    )
}


export default Home;