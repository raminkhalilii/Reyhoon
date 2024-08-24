import React from 'react';
import "./SideBar.css"
import add_icon from "../../assets/add_icon.png"
import order_icon from "../../assets/order_icon.png"
import {NavLink} from "react-router-dom";


function SideBar() {
    return (
        <div className="SideBar">
            <div className="SideBar-options">
                <NavLink className="SideBar-option" to="/add">
                    <img src={add_icon} alt=""/>
                    <p>Add Items</p>
                </NavLink>
                <NavLink className="SideBar-option" to="/list">
                    <img src={order_icon} alt=""/>
                    <p>List Items</p>
                </NavLink>
                <NavLink className="SideBar-option" to="/orders">
                    <img src={order_icon} alt=""/>
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default SideBar;