import { useState } from "react";

const ItemCount = ({stock, initial, productName}) => {
    const [cant, setCant] = useState(initial);
    const [stk, setStk] = useState(stock - cant);

    const onAdd = () => {
        if(stk) {
            setCant(cant + 1);
            setStk(stk - 1);
        }
    }

    return (
        <div>
            <p>{productName}</p>
            <button>-</button>
            <p>{cant}</p>
            <button onClick={onAdd}>+</button>
            <button>Agregar a carrito</button>
        </div>
    );
}

export default ItemCount;