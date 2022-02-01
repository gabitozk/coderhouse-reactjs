import './style.css';


const ItemDetail = ( {item} ) => {

    return (
        <div className="item-detail-container">
            <h2 className='item-detail-title'>{item.title}</h2> 
            <img src={item.img} alt={item.title}/>
            <p className="item-detail-price">${item.price}</p>
            <p>{item.description}</p>   
        </div>
    )
}

export default ItemDetail;