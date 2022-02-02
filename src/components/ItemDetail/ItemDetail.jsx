import './style.css';
import ItemCount from '../ItemCount';

const ItemDetail = ( {item} ) => {
 
    const onAdd = (cant) => {
        if (cant) {
          console.log(`Agregaste ${cant} productos`);
        }
      };

    return (
        <div className="item-detail-container">
            <h2 className='item-detail-title'>{item.title}</h2> 
            <img src={item.img} alt={item.title}/>
            <p className="item-detail-price">${item.price}</p>
            <p>{item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />   
        </div>
    )
}

export default ItemDetail;