import React, {useContext} from 'react';
import "./FoodItem.style.css"
import rating from "../../assets/frontend_assets/rating_starts.png";
import item_add from "../../assets/frontend_assets/add_icon_white.png"
import itemRemove from "../../assets/frontend_assets/remove_icon_red.png"
import item_add_green from "../../assets/frontend_assets/add_icon_green.png"
import {StoreContext} from "../../context/StoreContext.jsx";

function FoodItem({id,name,price,description,image}) {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);



    return (
        <div className="FoodItem">
            <div className="FoodItemImage">
                <img src={image} alt=""/>
                {!cartItems[id]
                ? <img className="add" src={item_add} alt="" onClick={()=>addToCart(id)}/> :
                    <div className="food-item-counter">
                        <img src={itemRemove} alt="" onClick={()=>removeFromCart(id)}/>
                        <p>{cartItems[id]}</p>
                        <img src={item_add_green} alt="" onClick={()=>addToCart(id)}/>
                    </div>}
            </div>
            <div className="FoodItemInfo">
                <div className="FoodItemNameRating">
                    <p>{name}</p>
                    <img src={rating} alt=""/>
                </div>
                <p className="FoodItemDescription">{description}</p>
                <p className="FoodItemPrice">${price}</p>
            </div>

        </div>
    )
}

export default FoodItem;