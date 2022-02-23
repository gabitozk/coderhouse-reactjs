import { useContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from "../../context/CartContext";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { getFirestore } from "../../firebase";

const CartPage = () => {
  const { cart, clear, removeItem, total } = useContext(CartContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const db = getFirestore();
  const collection = db.collection("orders");

  const handleCheckout = (e) => {
    e.preventDefault();

    if (name === ""|| surname === "" || phone === "") {
      console.log("Debés llenar los campos!");
    } else {
      const newOrder = {
        buyer: { name, surname, phone },
        items: cart,
        totalPurchase: total,
      };

      collection
        .add(newOrder)
        .then((res) => navigate(`/checkout/${res.id}`))
        .catch((err) => console.log(err));

      clear();
    }
  };

  if (cart.length !== 0) {
    return (
      <div className="cart-container">
        <h2>Este es tu carrito:</h2>
        <button onClick={clear}>Limpiar carrito</button>

        {cart.map((myCart) => {
          return (
            <>
              <div className="cart-item">
                <div className="cart-item--img">
                  <img src={myCart.item.img} alt={myCart.item.title} />
                </div>
                <div className="cart-item--title">
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
            </>
          );
        })}
        <h2 className="cart-total">Total: ${total}</h2>

        <h3>Introduzca sus datos:</h3>
        <form onSubmit={handleCheckout}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Escribí tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="surname">Apellido</label>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Escribí tu apellido"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <label htmlFor="phone">Teléfono</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Escribí tu teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <input type="submit" value="Terminar compra" />
        </form>
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
    );
  }
};

export default CartPage;
