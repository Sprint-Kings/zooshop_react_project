
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import Unauthorized from '../unauthorized/Unnauthorized';
import ErrorMessage from './../errorMessage/ErrorMessage';
import useZooService from '../../services/ZooService';
import useUserService from '../../services/UserService';

import './productPage.css'

const ProductPage = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1);
    const [message, setMessage] = useState(null);

    const {loading, getProduct, clearError} = useZooService();
    const {addCart, error, refreshToken} = useUserService();
    
    useEffect(() => {
        updateProduct()
    }, [productId])

    useEffect(() => {
        if (error === 'Unauthorized! Access Token was expired!') {
          refreshToken().then(
            () => {
              submit();
            }
          );
        }
        if (error === 'No token provided!') {
            updateProduct();
        }
      },[error])
    
    const updateProduct = () => {
        clearError();
        getProduct(productId)
            .then(onProductLoaded)
        
    }

    const onProductLoaded = (product) => {
        setProduct(product);
    }

    const submit = () => {
        clearError();
        addCart(product.id, count)
            .then((message) => setMessage(message))
    }

    const unauthorized = error === 'Refresh token was expired. Please make a new signin request' ? <Unauthorized/> : null;
    const errorMessage = error && error !== 'Unauthorized! Access Token was expired!' && error !== 'Refresh token was expired. Please make a new signin request' && error !== 'No token provided!'? <ErrorMessage/> : null;
    const spinner = loading ? <div className="login-page-container"><Spinner/></div> : null;
    const content = !(loading || (error && (error !== 'Unauthorized! Access Token was expired!')) || !product) ? <View product={product} count={count} setCount={setCount} message={message} submit={submit}/> : null;

    return (
        <div className='product-page-container'>
            {unauthorized}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({product, count, setCount, message, submit}) => {
    const {price, thumbnail, name, description, weight, color, category, in_stock} = product;

    const container = color ? color.map((item, i) => <span key={i} className='product-cart-circle' style={{background: item}}></span>) : weight.map((item , i) => {if (item) {return <p key={i}>{item}</p>}});
    return (
        <>
            <div className='product-page-column-1'>
                <img src={thumbnail} alt={name}/>
            </div>
            <div className='product-page-column-2'>
                    <h2>{name}</h2>
                    <div className='product-page-section-1'>
                        <div className='product-page-button-container'>
                            {in_stock ? <button onClick={() => submit()} className='product-page-button-in-cart'>В корзину</button> :
                             <button className='product-page-button-not-stock'>Нет в наличии</button>}
                            
                        </div>
                        <div className='product-page-count-container'>
                        <button className='product-page-count-minus' disabled={count === 1 ? true : false} onClick={() => setCount(current => current - 1)}>
                            <h4>-</h4>
                        </button>
                        <div className='product-page-count-number'>
                            <h4>{count}</h4>
                        </div>
                        <button className='product-page-count-plus' onClick={() => setCount(current => current + 1)}>
                            <h4>+</h4>
                        </button>
                        </div>
                    </div>
                    {message ? message : null}
                    <div className='product-page-section-2'>
                        <div className='product-page-price-container'>
                            <h2>Цена: {price[0]} &#8381;</h2>
                        </div>
                        <div className='product-page-color-container'>
                            <h2>{color ? 'Цвет:' : 'Вес:'}</h2>
                            {container}
                        </div>
                    </div>
                    <h2 style={{marginTop: '7%'}}>Описание</h2>
                    <p>{description}</p>
                    <h2 style={{marginBottom: '7%'}}>Категория: {category}</h2>
            </div>
        </>
    )
}

export default ProductPage;