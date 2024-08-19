import React from 'react';
import "./ExploreMenu.style.css"
import {menu_list} from "../../assets/frontend_assets/assets.js"

function ExploreMenu({category, setCategory}) {
    return (
        <div className="ExploreMenu" id="ExploreMenu">
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes. Our
                mission is to satisfy your
                cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name
                            ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt=""/>
                            <p className="explore-menu-list-item-text">{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className="separator"/>
        </div>
    )
}

export default ExploreMenu;