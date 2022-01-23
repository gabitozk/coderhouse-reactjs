import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [cant, setCant] = useState(initial);
    const [stockk, setStockk] = useState(stock);
      
    const sumCant = () => {
            setCant(cant + 1);
            setStockk(stockk - 1);
    }

    const resCant = () => {
            setCant(cant - 1);
            setStockk(stockk + 1);
    }

    return (
        <div>
            <p>Item detail</p>
            <button onClick={resCant}>-</button>
            <p>{cant}</p>
            <button onClick={sumCant}>+</button>
            <button>Agregar a carrito</button>
        </div>
    );
}

export default ItemCount;