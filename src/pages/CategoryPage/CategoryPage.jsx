import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";
import "./style.css";
import { getFirestore } from "../../firebase";

const CategoryPage = () => {
  const { catId } = useParams();
  const [productos, setProductos] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db
      .collection("productos")
      .where("category", "==", catId);

    const getDataFromFirestore = async () => {
      try {
        const response = await productsCollection.get();
        if (response.empty) {
          console.log("No hay productos");
        }
        setProductos(
          response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoad(false);
      }
    };

    getDataFromFirestore();
  }, [catId]);

  if (load) {
    return <p>cargando....</p>;
  } else {
    return (
      <div className="category-page-container">
        {productos.map((item) => {
          return (
            <Item
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
    );
  }
};

export default CategoryPage;
