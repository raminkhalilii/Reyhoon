import React from 'react';
import "./Footer.style.css"
import logo from "../../assets/frontend_assets/logo.png"
import facebook from "../../assets/frontend_assets/facebook_icon.png"
import twitter from "../../assets/frontend_assets/twitter_icon.png"
import linkedin from "../../assets/frontend_assets/linkedin_icon.png"

function Footer() {
    return (
        <div className="footer" id="Footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={logo} alt=""/>
                    <p> orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                    <div className="footer-social-icons">
                        <img src={facebook} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={linkedin} alt=""/>
                    </div>
                </div>
                <div className="footer-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-234-567-8901</li>
                        <li>contact@Reyhoon.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="copy-right">Copyright 2024 © Reyhoon.com - All Right Reserve.</p>
        </div>
    )
}

export default Footer;