import './style.css';

const ShopHeader = ({userName}) => {
    return (
        <div className="container-shop-header">
            <h4>Hola, {userName}</h4>
            <h1>Encuentra los mejores productos de audio en esta tienda</h1>
        </div>
    )
}

export default ShopHeader;