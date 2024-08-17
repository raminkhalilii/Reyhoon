import React from 'react';
import {assets} from "../../assets/frontend_assets/assets.js";


function NavBar() {
    return (
        <div className="navbar">
            <img src={assets.logo} alt="logo" className="logo" />
            <ul className="navbar-menu">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default NavBar;