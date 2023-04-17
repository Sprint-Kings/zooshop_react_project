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
        console.log(product)
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
        <div className="cart-container">
            {errorMessage}
            {spinner}
            {content}
        </div>
        </Link>
    )
}

const View = ({product}) => {
    const {name, thumbnail, category} = product;
    return (
        <>
            <img src={thumbnail} style={{width: '60%'}} alt={name}></img>
            <div className='color-container'>
                <span className='circle'></span>
                <span className='cirlce'></span>
                <span className='circle'></span>
            </div>
            <p>{name}</p>
            <p>{category}</p>
        </>
    )
}

export default ProductCart;