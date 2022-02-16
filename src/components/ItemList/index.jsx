import { useEffect, useState } from "react";
import './style.css';
import Item from "../Item";
import { getFirestore } from "../../firebase";

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const db = getFirestore();
        const productsCollection = db.collection("productos");
        
        const getDataFromFirestore = async () => {
            try {
                const response = await productsCollection.get();
                if(response.empty) {
                    console.log("No hay productos");
                }
                setProducts(response.docs.map((doc) => ({...doc.data(), id: doc.id})));
            } catch(err) {
                setError(err);
            } finally {
                setLoad(false);
            }
        }

        getDataFromFirestore();
    
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