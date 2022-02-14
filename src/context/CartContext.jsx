import { useState } from "react";
import { createContext } from "react";

//Creo el Context --> CartContext
export const CartContext = createContext({});

//Creo el Custom Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((purchase) => purchase.item.id === Number(id));
  };

  const addItem = (item, quantity) => {
    const newItem = { item, quantity };

    if (isInCart(item.id)) {
      console.log("Ya tenés este producto en el carrito");
    } else {
      if (quantity > 0) {
        setCart((prevState) => [...prevState, newItem]);
        console.log(`Agregaste: ${quantity} ${item.title}`);
      } else {
          console.log("Debés agregar al menos 1 item");
      }
    }
  };

  const removeItem = (itemId) => {
    const newArray = cart.filter((purchase) => purchase.item.id !== itemId);
    setCart([...newArray]);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ addItem, cart, setCart, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

//HOOK -- ANOTACION PERSONAL
//export const useCart = () => useContext(CartContext);
