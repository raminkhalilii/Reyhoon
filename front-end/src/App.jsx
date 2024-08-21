import React, {useState} from 'react';
import NavBar from "./components/NavBar/NavBar.jsx";
import './index.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp.jsx";


function App() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
            <div className="App">
                <NavBar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Order" element={<PlaceOrder/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}

export default App;