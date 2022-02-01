import ItemDetailContainer from '../../components/ItemDetailContainer';
import ItemListContainer from '../../components/ItemListContainer';
import ShopHeader from '../../components/ShopHeader';

const CategoryPage = () => {

    return (
        <>
            <ShopHeader userName={'Gabriel'} />
            <ItemListContainer />
        </>
    )
}

export default CategoryPage;