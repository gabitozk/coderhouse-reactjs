import "./style.css";
import ItemCount from "../ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [itemCant, setItemCant] = useState(0);
  const [stock, setStock] = useState(item.stock);
  const { addItem } = useContext(CartContext);

  const handleClick = () => {
    addItem(item, itemCant);
  };

  return (
    <div className="item-detail-container">
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
