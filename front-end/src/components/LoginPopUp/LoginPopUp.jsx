import React from 'react';
import "./LoginPopUp.style.css"
import cross from "../../assets/frontend_assets/cross_icon.png"


function LoginPopUp({setShowLogin}) {

    const [current, setCurrent] = React.useState("login");
    return (
        <div className="loginPopUp">
            <div className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{current === "login" ? "Login" : "Sign Up"}</h2>
                    <img src={cross} onClick={() => setShowLogin(false)} alt=""/>
                </div>
                <div className="login-popup-input">
                    {current === "login" ? <></> : <input type="text" placeholder="Your Name" required/>}
                    <input type="email" placeholder="Your Email" required/>
                    <input type="password" placeholder="Password" required/>
                    <button>{current === "login" ? "Login" : "Creat An Account"}</button>
                </div>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>I agree to the terms and conditions as set out by the user agreement.</p>
                </div>
                    {current === "login" ? (
                        <p>Create new account?<span onClick={() => setCurrent("sign up")}>Click Here</span></p>) : (
                        <p>Already have an account?<span onClick={() => setCurrent("login")}>Click Here</span></p>)}
            </div>

        </div>
    )
}

export default LoginPopUp;
