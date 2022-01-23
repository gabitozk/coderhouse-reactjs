import './style.css';

const Item = ({ title, price }) => {
    return (
        <div className="item">
            <h3>{title}</h3>
            <p>${price}</p>
        </div>
    );
}

export default Item;