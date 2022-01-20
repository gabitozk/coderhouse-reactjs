import ItemCount from "../ItemCount";

const ItemListContainer = () => {

    return (
            <div>
                <h1>PRODUCTOS</h1>
                <ItemCount initial={1} stock={3} productName={"T-shirt"}/>
            </div>
        );
    
}

export default ItemListContainer;