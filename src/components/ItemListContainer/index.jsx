import './style.css';
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";

const ItemListContainer = () => {
    const onAdd = (cant) => {
        if(cant) {
            console.log(`Agregaste ${cant} productos`);
        }
    }

    return (
            <div className="container">
                <ItemCount initial={1} stock={3} onAdd={onAdd}/>
                <ItemList />
            </div>
        );
    
}

export default ItemListContainer;