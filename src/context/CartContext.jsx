import { useState, useContext } from "react";
import { createContext } from "react";

//Creo el Context --> CartContext
export const CartContext = createContext({});

//Creo el Custom Provider
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const newItem = {item, quantity};
        setCart((prevState) => [...prevState, newItem]);
    }

    return ( 
        <CartContext.Provider value={addItem}>
            {children}
        </CartContext.Provider>
    );
}

//HOOK
//export const useCart = () => useContext(CartContext);
