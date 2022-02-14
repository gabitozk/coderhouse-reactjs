import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./style.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, clear, removeItem } = useContext(CartContext);

  if (cart.length !== 0) {
    return (
      <div className="cart-container">
        <h2>Este es tu carrito:</h2>
        <button onClick={clear}>Limpiar carrito</button>

        {cart.map((myCart) => {
          return (
            <div className="cart-item">
              <div className="cart-item--img">
                <img src={myCart.item.img} alt={myCart.item.title} />
              </div>
              <div  className="cart-item--title">
                <h4>{myCart.item.title}</h4>
                <p>Cantidad seleccionada: {myCart.quantity}</p>
                <button onClick={() => removeItem(myCart.item.id)}>
                  eliminar item
                </button>
              </div>
              <div className="cart-item--price">
                <p>${myCart.item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <div className="cart-no-items">
          <h2>Todavía no tenés productos en el carrito :D</h2>
          <Link to="/">Andá a buscar productos para comprar!</Link>
        </div>
      </div>
    )
  }
};

export default CartPage;
