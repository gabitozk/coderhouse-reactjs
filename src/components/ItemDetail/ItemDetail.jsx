import './style.css';
import ItemCount from '../ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ( {item} ) => {
    const [ itemCant, setItemCant ] = useState(1);
    const [ stock, setStock ] = useState(item.stock - 1);

    const sumaCant = () => {
        if(stock) {
            setItemCant((prevState) => prevState + 1);
            setStock((prevState) => prevState - 1);
        }
    }

    const restCant = () => {
        if(itemCant) {
            setItemCant((prevState) => prevState - 1);
            setStock((prevState) => prevState + 1);
        }
    }
    
    const onAdd = (cant) => {
        if (cant) {
          console.log(`Has agregado: ${cant} ${item.title}`)
        }
    };

    return (
        <div className="item-detail-container">
            <h2 className='item-detail-title'>{item.title}</h2> 
            <img src={item.img} alt={item.title}/>
            <p className="item-detail-price">${item.price}</p>
            <p>{item.description}</p>
            <ItemCount onAdd={onAdd} 
                       sumaCant={sumaCant} 
                       restCant={restCant} 
                       itemCant={itemCant}
            />   
            <button className='item-detail-button-buy'>
                <Link to="/cart">Terminar compra</Link>
            </button>
        </div>
    )
}

export default ItemDetail;