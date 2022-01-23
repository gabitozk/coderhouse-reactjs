import ItemCount from "../ItemCount";
import ItemList from "../ItemList";

const ItemListContainer = () => {

    return (
            <div>
                <h1>PRODUCTOS</h1>
                <ItemCount initial={1} stock={3} productName={"T-shirt"}/>
                <ItemList />
            </div>
        );
    
}

export default ItemListContainer;