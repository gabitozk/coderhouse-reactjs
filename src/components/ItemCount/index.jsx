import "./style.css";
import { Link } from "react-router-dom";

const ItemCount = ({ onAdd, sumaCant, restCant, itemCant }) => {
  return (
    <div className="item-count-container">
      <div className="item-count-buttons-container">
        <button onClick={restCant}>-</button>
        <p>{itemCant}</p>
        <button onClick={sumaCant}>+</button>
      </div>
      <Link to="/cart">
        <button className="item-count-add-cart" onClick={() => onAdd(itemCant)}>
          Agregar al carrito
        </button>
      </Link>
    </div>
  );
};

export default ItemCount;
