import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ProductsDetailPage = () => {
    const { productId } = useParams();
    const [ producto, setProducto ] = useState();

    useEffect (() => {
        const URL = `http://localhost:3001/productos/${productId}`;

        fetch(URL)
            .then((res) => res.json())
            .then((data) => setProducto(data));

    }, [productId]);
    
    if(producto) {
        
        return (
            <>
                <h2>mi producto: {producto.title}</h2>
                <h2>{producto.price}</h2>
    
            </>
        )
    }

    return null;

}

export default ProductsDetailPage;