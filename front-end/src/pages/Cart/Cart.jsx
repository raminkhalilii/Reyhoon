import React, {useContext} from 'react';
import "./Cart.style.css"
import {StoreContext} from "../../context/StoreContext.jsx";
import {useNavigate} from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
    const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext)
    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br/>
                <hr/>
                {food_list.map((item) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt=""/>
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p className="Cross" onClick={() => removeFromCart(item._id)}>X</p>
                                </div>
                                <hr/>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}$</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{getTotalCartAmount()===0?0:2}$</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}$</p>
                        </div>
                    </div>
                    <button onClick={()=>navigate("/Order")}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, enter it here!</p>
                        <div className="cart-promocode-input">
                            <input placeholder="Enter promo code..." type="text" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}


export default Cart;