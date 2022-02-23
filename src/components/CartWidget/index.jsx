import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import './style.css';

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);

    return (
        <div className="cart-widget">
            
            <FaShoppingCart/>
            <p>({totalItems})</p>
           

        </div>
    );
        
}

export default CartWidget;