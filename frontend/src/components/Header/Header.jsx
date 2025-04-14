import React from 'react';
import "./Header.css";

const Header=()=>{
    return (
        <div className='header mb-5' id='header'>
            <div className="header-contents ">
                <h2>Order Your Favorite Meals, Anytime!</h2>
                <p>Explore a world of flavors with our diverse menu, crafted with the freshest ingredients by top chefs. Whether you're craving a quick bite or a gourmet meal, we've got you covered.</p>
                <a className='btn btn-light rounded-pill p-2 lh-lg mb-3' href='#exploremenu'>&nbsp;Explore Menu&nbsp;</a>
            </div>
        </div>
    )
}

export default Header;