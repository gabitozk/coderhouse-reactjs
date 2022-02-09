import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartPage = () => {
  const { cart, clear, removeItem } = useContext(CartContext);

  return (
    <>
      <h2>Este es tu carrito:</h2>
      <div>
        <button onClick={clear}>Limpiar carrito</button>
        {cart.map((myCart) => {
          return (
            <div>
              <p>{myCart.item.title}</p>
              <p>{myCart.quantity}</p>
              <button onClick={() => removeItem(myCart.item.id)}>eliminar item</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartPage;
