import { useEffect, useState } from "react";
import './style.css';
import Item from "../Item";
import productos from "../../data";


const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);
    
    useEffect(() => {
        const URL = 'http://localhost:3001/productos';

        fetch(URL)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .finally(setLoad(false));
    
    }, [])

    if(load) {
        return <h3>Cargando...</h3>
    } else {

        return(
            <div className="container-item-list">
                {products.map((producto) => (
                    <Item key={producto.id}
                          img={producto.img}
                          title={producto.title}
                          price={producto.price}
                          id={producto.id}
                    />
                ))}
            </div>
        );
    }
}


export default ItemList;