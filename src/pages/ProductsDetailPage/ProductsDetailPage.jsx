import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from '../../components/ItemDetailContainer';


const ProductsDetailPage = () => {
    const { productId } = useParams();
    const [ producto, setProducto ] = useState();
    const [ load, setLoad ] = useState(true);

    useEffect (() => {
        const URL = `http://localhost:3001/productos/${productId}`;

        fetch(URL)
            .then((res) => res.json())
            .then((data) => setProducto(data))
            .finally(() => setLoad(false));

    }, [productId]);
    
    if(load) {
        return <h2>Cargando...</h2>
    } else {
        return (
            <ItemDetailContainer item={producto} />
        )
    }

}

export default ProductsDetailPage;