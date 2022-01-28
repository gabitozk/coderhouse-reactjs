import './style.css';
import { FaHdd, FaMemory } from "react-icons/fa";


const ItemDetail = ( {item} ) => {
    return (
        <div className="item-detail-container">
            <h2>{item.title}</h2> 
            <img src={item.img} alt={item.title}/>
            <p>{item.description}</p>   
            <ul>
                <li><FaHdd /></li>
                <li><FaMemory /></li>
            </ul>    
        </div>
    )
}

export default ItemDetail;