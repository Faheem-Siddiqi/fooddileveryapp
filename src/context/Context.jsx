import React, { createContext, useContext, useState } from "react";
export const Appcontext = createContext();
export const useGlobalContext = () => useContext(Appcontext);
export const ContextProvider = (props) => {
    const [cartItem, setCartItem] = useState([]);
    const addToCart = (MenuData) => {
        const countingCartItem = cartItem.find((data) => {
            return data.id === MenuData.id;
        });
        if (countingCartItem) {
            setCartItem((data) =>
                data.map((item) =>
                    item.id === MenuData.id ? { ...item, count: item.count + 1 } : item
                )
            );
        } else {
            setCartItem([...cartItem, { ...MenuData, count: 1 }]);
        }
    };
    return (
        <Appcontext.Provider value={{ addToCart, cartItem, setCartItem }}>
            {props.children}
        </Appcontext.Provider>
    );
};
