import { useState } from "react";

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
        <div>
            <button onClick={restCant}>-</button>
            <p>{cant}</p>
            <button onClick={sumaCant}>+</button>
            <button onClick={()=> onAdd(cant)} >Agregar a carrito</button>
        </div>
    );
}

export default ItemCount;