import React from 'react';
import {useState} from "react";
import {assets} from "../../assets/frontend_assets/assets.js";
import './NavBar.style.css'
import {Link} from "react-router-dom";

function NavBar() {

    const [menu, setMenu] = useState("home");
    return (
        <div className="navbar">
            <img src={assets.logo} alt="logo" className="logo" />
            <ul className="navbar-menu">
                <Link onClick={()=>setMenu("home")} className={menu === "home"?"active":""} to="/">home</Link>
                <a href={"#ExploreMenu"} onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>menu</a>
                <a href={"#AppDownload"} onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>mobile app</a>
                <a href={"#Footer"} onClick={()=>setMenu("contact us")} className={menu === "contact us"?"active":""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search_icon" className="search-icon" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="basket_icon" />
                    <div className="dot"></div>
                </div>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default NavBar;