import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useZooService from '../../services/ZooService';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './productCart.css';

const ProductCart = ({id}) => {
    const [product, setProduct] = useState(null);
    
    const {loading, error, getProduct, clearError} = useZooService();
    
    useEffect(() => {
        updateProduct();
    }, [])

    const updateProduct = () => {
        clearError();
        getProduct(id)
            .then(onProductLoaded);
    }

    const onProductLoaded = (product) => {
        setProduct(product);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !product) ? <View product={product}/> : null;

    return (
        <Link to={content ? `/product/${id}` : null} style={{ textDecoration: 'none', color: 'black'}}>
        <div  className="product-cart-container">
            {errorMessage}
            {spinner}
            {content}
        </div>
        </Link>
    )
}

const View = ({product}) => {
    const {name, thumbnail, weight, color, price} = product;

    const container = color ? color.map((item, i) => <span key={i} className='product-cart-circle' style={{background: item}}></span>) : weight.map((item , i) => {if (item) {return <p key={i}>{item}</p>}});
    return (   
        <>
            <div className='product-cart-column-1'>
                <img src={thumbnail} style={{width: '60%'}} alt={name}></img>
            </div>
            <div className='color-container'>
                {container}
            </div>
            <div className='product-cart-column-2'>
            <p>{name.length > 60 ? name.slice(0, 60) + '...' : name}</p>
            </div>
            <div className='product-cart-column-3'>
            <h4>{price[0]} &#8381;</h4>
            </div>
        </>
    )
}

export default ProductCart;