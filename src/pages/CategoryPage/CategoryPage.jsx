import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";
import "./style.css";

const CategoryPage = () => {
  const { catId } = useParams();
  const [productos, setProductos] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const URL = `http://localhost:3001/productos`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .finally(setLoad(false));
  }, []);

  if (load) {
    return <p>cargando....</p>;
  } else {
    return (
    
        <div className="category-page-container">
          {productos.map((item) => {
            if (item.category === catId) {
              return (
                <Item
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                />
              );
            }
            return null;
          })}
        </div>
    
    );
  }
};

export default CategoryPage;
