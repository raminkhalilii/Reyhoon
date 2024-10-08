import React, {useContext} from 'react';
import "./FoodDisplay.style.css"
import {StoreContext} from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";

function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext);

    return (
        <div className="food-display" id="food-display">
            <h2>
                Top dishes near you
            </h2>
            <div className="food-item">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description}
                                         image={item.image} price={item.price}/>
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay;