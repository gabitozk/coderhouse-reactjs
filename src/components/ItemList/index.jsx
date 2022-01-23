import { useEffect, useState } from "react";
import Item from "../Item";
import productos from "../../data";

const ItemList = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const getProducts = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(productos) ,1000);
            })
        }

        getProducts()
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, [])

    return(
        <div>
            <h3>Mis productos</h3>
            {products.map((producto) => (
                <Item key={producto.id}
                      title={producto.title}
                      price={producto.price}
                />
            ))}
        </div>
    );
}

export default ItemList;