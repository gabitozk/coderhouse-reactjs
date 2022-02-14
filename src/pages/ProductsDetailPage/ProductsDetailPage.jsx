import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer";
import { getFirestore } from "../../firebase";

const ProductsDetailPage = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("productos");
    const product = productsCollection.doc(productId);

    product
      .get()
      .then((response) => {
        if(!response.exists) console.log("No existe este producto");
        setProducto({ ...response.data(), id: response.id });
      })
      .finally(setLoad(false));
  }, [productId]);

  if (load || !producto) {
    return <h2>Cargando...</h2>;
  } else {
    return <ItemDetailContainer item={producto} />;
  }
};

export default ProductsDetailPage;
