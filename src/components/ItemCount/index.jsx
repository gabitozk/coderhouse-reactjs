import { useState } from "react";
import './style.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [cant, setCant] = useState(initial);
    const [stk, setStk] = useState(stock - cant);

    const sumaCant = () => {
        if(stk) {
            setCant(cant + 1);
            setStk(stk - 1);
        }
    }

    const restCant = () => {
        if(cant) {
            setCant(cant - 1);
            setStk(stk + 1);
        }
    }

    return (
        <div className="item-count-container">
            <div className="item-count-buttons-container">
                <button onClick={restCant}>-</button>
                <p>{cant}</p>
                <button onClick={sumaCant}>+</button>
                </div>
            <button className="item-count-add-cart" onClick={()=> onAdd(cant)} >Agregar a carrito</button>
        </div>
    );
}

export default ItemCount;