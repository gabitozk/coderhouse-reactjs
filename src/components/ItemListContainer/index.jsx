import './style.css';
import ItemList from "../ItemList";

const ItemListContainer = () => {
    const onAdd = (cant) => {
        if(cant) {
            console.log(`Agregaste ${cant} productos`);
        }
    }

    return (
            <div className="container">
                <ItemList />
            </div>
        );
    
}

export default ItemListContainer;