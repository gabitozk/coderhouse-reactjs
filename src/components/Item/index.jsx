import { useNavigate } from 'react-router-dom';
import './style.css';

const Item = ({ title,img, price, id }) => {
    const navigate = useNavigate();
    
    return (
        <div className="item">
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>${price}</p>
            <button onClick={() => navigate(`/${id}`)}>Ver detalle</button>
        </div>
    );
}

export default Item;