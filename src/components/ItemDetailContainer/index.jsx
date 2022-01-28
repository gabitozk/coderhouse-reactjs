import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const URL = 'http://localhost:3001/productos';
        
        const getItem = () => {
            
            fetch(URL)
                .then((res) => res.json())
                .then((data) => setItem(data))
                .catch((err) => console.error("No se pudo traer el producto:" + err))
                .finally(() => setLoad(false));
        }

        getItem();

    }, []);

    if (load) {
        
        return <h3>cargando...</h3>
    
    } else {

        return (
            
            <div>
                <ItemDetail item={item[0]}/>
            </div>
        )
        
    }
    
} 

export default ItemDetailContainer;