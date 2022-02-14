import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import './style.css';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="cart-widget">
            
            <FaShoppingCart/>
            <p>({cart.length})</p>
           

        </div>
    );
        
}

export default CartWidget;