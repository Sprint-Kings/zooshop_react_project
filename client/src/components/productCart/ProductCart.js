import './productCart.css';
import productImage from '../../img/product_image.png'

const ProductCart = () => {
    return (
        <div className="cart-container">
            <img src={productImage} style={{width: '60%'}}></img>
            <div className='color-container'>
                <span className='circle'></span>
                <span className='cirlce'></span>
                <span className='circle'></span>
            </div>
            <p>product name</p>
            <p>category</p>
        </div>
    )
}

export default ProductCart;