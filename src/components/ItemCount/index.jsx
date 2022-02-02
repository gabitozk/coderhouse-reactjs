import './style.css';

const ItemCount = ({ onAdd, sumaCant, restCant, itemCant }) => {
    return (
        <div className="item-count-container">
            <div className="item-count-buttons-container">
                <button onClick={restCant}>-</button>
                <p>{itemCant}</p>
                <button onClick={sumaCant}>+</button>
                </div>
            <button className="item-count-add-cart" onClick={()=> onAdd(itemCant)}>Agregar a carrito</button>
        </div>
    );
}

export default ItemCount;