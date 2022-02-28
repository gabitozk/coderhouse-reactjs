import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import './style.css';

const CheckoutPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const collection = db.collection("orders");

    collection
      .doc(orderId)
      .get()
      .then((res) => setOrder({ ...res.data(), id: res.id }))
      .catch((err) => console.log(err))
      .finally(setLoad(false));
  }, [orderId]);

  if (load || !order) {
    return <h2>Cargando...</h2>;
  } else {
    return (
        <div className="checkout-container">
          <h2>Tu compra fue realizada!</h2>
          <h3>Detalle de la compra:</h3>
          <h4>Datos personales</h4>
          <p>Nombre: {order.buyer.name}</p>
          <p>Apellido: {order.buyer.surname}</p>
          <p>Teléfono de contacto: {order.buyer.phone}</p>
          <h4>Productos comprados</h4>
          {order.items.map((elem) => (
            <div className="checkout-product-img">
              <img src={elem.item.img} alt={elem.item.title} />
              <p>
                {elem.quantity} X {elem.item.title}
              </p>
            </div>
          ))}
          <h3>Total: ${order.totalPurchase}</h3>
        </div>
    );
  }
};

export default CheckoutPage;
