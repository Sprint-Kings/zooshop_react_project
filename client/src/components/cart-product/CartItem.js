import { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import useZooService from '../../services/ZooService';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './cart-item.css'

const CartItem = ({id, count, setTotal}) => {
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
    const content = !(loading || error || !product) ? <View product={product} count={count} setTotal={setTotal}/> : null;

    return (
        <Link to={content ? `/product/${id}` : null} style={{ textDecoration: 'none', color: 'black'}}>
        <div  className="cart-item-container">
            {errorMessage}
            {spinner}
            {content}
        </div>
        </Link>
    )
}

const View = ({product, count, setTotal}) => {
    const {name, thumbnail, price} = product;

    useEffect(() => {
        setTotal(current => current + count * product.price[0])
    },[])
    
    return (   
        <>
            <div className='cart-item-section-1'>
                <img src={thumbnail} style={{width: '60%'}} alt={name}></img>
            </div>
            <div className='cart-item-section-2'>
                <p>{name}</p>
                <h4>{price[0]} &#8381;</h4>
                <h4>Количество: {count}</h4>
            </div>
        </>
    )
}

export default CartItem;