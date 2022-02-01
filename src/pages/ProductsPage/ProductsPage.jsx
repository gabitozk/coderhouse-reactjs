import './style.css';
import ItemListContainer from '../../components/ItemListContainer';
import ShopHeader from '../../components/ShopHeader';

const ProductsPage = () => {
    return (
        <>
            <ShopHeader userName={'Gabriel'} />
            <ItemListContainer />
        </>
    )
}

export default ProductsPage;