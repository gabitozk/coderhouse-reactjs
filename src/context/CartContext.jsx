import { useEffect, useState } from "react";
import { createContext } from "react";

//Creo el Context --> CartContext
export const CartContext = createContext({});

//Creo el Custom Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalITems] = useState(0);
 
  useEffect(() => {
    const getTotal = () => {
      let newTotal = 0;
      cart.forEach((elem) => {
        newTotal += elem.item.price * elem.quantity;
      })
  
      setTotal(newTotal);
    }

    getTotal();
  }, [cart]);

  useEffect(() => {
    let total = 0;
    
    for (let item of cart) {
      total += item.quantity;
    }

    setTotalITems(total);

  }, [cart]);

  const isInCart = (id) => {
    return cart.some((purchase) => purchase.item.id === id);
  };

  const addItem = (item, quantity) => {
    const newItem = { item, quantity };

    if (isInCart(item.id)) {
      let product = cart.find((p) => p.item.id === item.id);
      product.quantity += quantity;

      let newCart = cart.map( p => {
        if (product.item.id === p.item.id) return product;

        return p;
      });

      setCart(newCart);
    } else {
      if (quantity > 0) {
        setCart(prevState => [...prevState, newItem]);
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
    <CartContext.Provider
      value={{
        addItem,
        cart,
        setCart,
        clear,
        removeItem,
        total,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//HOOK -- ANOTACION PERSONAL
//export const useCart = () => useContext(CartContext);
