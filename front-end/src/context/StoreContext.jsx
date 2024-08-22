import {createContext, useEffect, useState} from "react";
import {food_list} from "../assets/frontend_assets/assets.js";


export const StoreContext = createContext(null);

function StoreContextProvider(props) {
    const [cartItems, setCartItems] = useState({});


    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]: 1}));
        } else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let foodInfo = food_list.find((product) => product._id === item);
                total += foodInfo.price * cartItems[item];
            }
        }
        return total;
    }

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);
    return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
}

export default StoreContextProvider;