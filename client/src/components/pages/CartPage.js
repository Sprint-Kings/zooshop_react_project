import { useState, useEffect } from "react";

import useUserService from '../../services/UserService';

import './cartPage.css';

import CartItem from "../cart-product/CartItem";
import Page404 from "./404";
import Unauthorized from "../unauthorized/Unnauthorized";
import Spinner from '../spinner/Spinner';

const CartPage = () => {
    const [cartList, setCartList] = useState([]);
    const [adresses, setAdresses] = useState([]);
    const [total, setTotal] = useState(0);
    const [adress, setAdress] = useState(null);
    const [buy, setBuy] = useState(null);
    const [errorSubmit, setErrorSubmit] = useState(null);

    useEffect(() => {
        updateCart();
        updateAdresses();
    }, [])

    const {loading, error, getCart, clearError, refreshToken, deleteCart, getAdresses, addOrder} = useUserService();

    useEffect(() => {
        if (error === 'Unauthorized! Access Token was expired!') {
          refreshToken().then(
            () => {
              updateCart();
            }
          );
        }
    },[error])
    
    const updateCart = () => {
        clearError();
        getCart()
            .then(onCartLoaded);
    }
    
    const onCartLoaded = (cart) => {
        setCartList(cart);   
    }

    const removeCartItem = (id) => {
        deleteCart(id).then(
            () => {
            setTotal(0);
            updateCart();
            })
    }

    const updateAdresses = () => {
        clearError();
        getAdresses()
            .then(onAdressesLoaded);
    }
    
    const onAdressesLoaded = (adresses) => {
        setAdresses(adresses); 
    }

    const submitOrder = () => {
        if (adress) {
            addOrder(adress, total)
            .then((message) => {
                setBuy(<Unauthorized message={message}/>)
            })
        } else {
            setErrorSubmit('Выберите адрес доставки');
        }
        
    }

    const adressesList = adresses.length !== 0 ? 
    adresses.map(item => {
        return <tr>
                <th style={{width: '80%', textAlign: 'start'}}>{item}</th>
                <th>
                    <p className="cart-page-button-select" onClick={() => setAdress(item)}>
                    {item === adress ? 'Выбрано' : 'Выбрать'}
                    </p>
                </th>
                </tr>
    }): <tr><th>У вас пока нет адресов</th></tr>;

    const cartListItem = cartList.length !== 0 ? cartList.map(item => {
        return (
        <div className="cart-page-container-item">
            <CartItem id={item.product_id} count={item.count} setTotal={setTotal}/>
            <button className="cart-page-button" onClick={() => removeCartItem(item.product_id)}>Удалить</button>
        </div>)
    }) : <div className="cart-page-container-item" style={{justifyContent: 'center'}}><h2>Пусто</h2></div>;

    const unauthorized = error === 'Refresh token was expired. Please make a new signin request' ? <Unauthorized/> : null;
    const errorMessage = error && error !== 'Refresh token was expired. Please make a new signin request' && error !== 'При создании заказа произошла ошибка'? <Page404/> : null;
    const spinner = loading ? <div className="login-page-container"><Spinner/></div> : null;
    const buyMessage = buy ? buy : null;
    const content = !(loading || error || !cartList || buy) ? 
    <div className="cart-page-container">
        <h1>Корзина</h1>
        {cartListItem}
        <div style={{display: 'flex', justifyContent: 'flex-start', width: '60%', flexDirection: 'column'}}>
            {cartList.length !== 0 ? <h1>Итого: {total} &#8381;</h1> : null}
            
            {cartList.length !== 0 ? 
            <>
            <h1>Выберите адрес доставки:</h1>
            <table className="cart-page-table">
                {adressesList}
            </table>
            <h1>Оплата только наличными!</h1>
            <button className='admin-page-button-submit' onClick={() => submitOrder()}>
                Оформить заказ
            </button></>: null}
            <p className='admin-page-invalid-message'>{errorSubmit}</p>
        </div>
        
    </div> : null;
    return (
        <div>
            {buyMessage}
            {unauthorized}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

export default CartPage;