import React from 'react';
import NavBar from "./components/NavBar/index.jsx";
import './index.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import PlaceOrder from "./pages/PlaceOrder/index.jsx";
import Cart from "./pages/Cart/index.jsx";


function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Order" element={<PlaceOrder/>} />
                <Route path="/Cart" element={<Cart/>} />
            </Routes>
        </div>
    )
}

export default App;