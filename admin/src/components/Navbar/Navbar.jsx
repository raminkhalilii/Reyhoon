import React from 'react';
import "./Navbar.css"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile_image.png"

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="" className="logo"/>
            <img src={profile} alt="" className="profile"/>

        </div>
    )
}

export default Navbar;