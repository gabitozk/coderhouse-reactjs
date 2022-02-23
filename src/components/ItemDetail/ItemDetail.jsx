import "./style.css";
import ItemCount from "../ItemCount";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [itemCant, setItemCant] = useState(0);
  const [stock, setStock] = useState(item.stock);
  const { addItem } = useContext(CartContext);
  const getNotify = (productTitle) => toast(`Agregaste a tu carrito: ${item.title}`);


  const handleClick = () => {
    addItem(item, itemCant);

    getNotify(item.title, {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined});
  };

  return (
    <div className="item-detail-container">
      <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
       />
      <h2 className="item-detail-title">{item.title}</h2>
      <img src={item.img} alt={item.title} />
      <p className="item-detail-price">${item.price}</p>
      <p>{item.description}</p>
      <ItemCount
        itemCant={itemCant}
        setItemCant={setItemCant}
        stock={stock}
        setStock={setStock}
      />
      <button className="item-count-add-cart" onClick={handleClick}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
