import './style.css';
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import ItemDetailContainer from '../ItemDetailContainer';

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