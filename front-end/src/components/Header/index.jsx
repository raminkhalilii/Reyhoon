import React from 'react';
import "./Header.style.css"

function Header() {

    return (
        <div className="Header">
            <div className="Header-contents">
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients
                    and
                    culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one
                    delicious meal at a time</p>
                <button onClick={() => {
                }}>View Menu
                </button>
            </div>
        </div>
    )
}

export default Header;