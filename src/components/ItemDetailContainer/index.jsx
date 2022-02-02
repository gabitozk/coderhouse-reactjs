import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ item }) => {
  
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
