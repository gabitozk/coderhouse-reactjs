import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const ItemCount = ({ stock, setStock, itemCant, setItemCant }) => {
  
  const sumaCant = () => {
    if (stock) {
      setItemCant((prevState) => prevState + 1);
      setStock((prevState) => prevState - 1);
    }
  };

  const restCant = () => {
    if (itemCant) {
      setItemCant((prevState) => prevState - 1);
      setStock((prevState) => prevState + 1);
    }
  };
  
  return (
    <div className="item-count-container">
      <div className="item-count-buttons-container">
        <button onClick={restCant}>-</button>
        <p>{itemCant}</p>
        <button onClick={sumaCant}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
