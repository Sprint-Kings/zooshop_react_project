import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import useUserService from '../../services/UserService';

import './cartPage.css';

import CartItem from "../cart-product/CartItem";
import Page404 from "./404";
import Unauthorized from "../unauthorized/Unnauthorized";
import Spinner from '../spinner/Spinner';

const OrderPage = () => {
    const {id} = useParams();
    const [total, setTotal] = useState(0);
    const [buy, setBuy] = useState(null);
    const [order, setOrder] = useState(null);

    const {loading, error, clearError, refreshToken, deleteOrder, getOrder} = useUserService();

    useEffect(() => {
        updateOrder();
    }, [])

    useEffect(() => {
        if (error === 'Unauthorized! Access Token was expired!') {
          refreshToken().then(
            () => {
                updateOrder();
            }
          )
        }
    },[error])

    const updateOrder = () => {
        clearError();
        getOrder(id)
            .then(onOrderLoaded);
    }
    
    const onOrderLoaded = (order) => {
        console.log(order)
        setOrder(order);   
    }

    const removeOrder = () => {
        clearError();
        deleteOrder(id)
        .then((message) => {
            setBuy(<Unauthorized message={message}/>)
        })
    }

    const orderListItem = order ? order.product_array.map((item, i) => {
        return (
        <div className="cart-page-container-item">
            <CartItem id={item} count={order.count_array[i]} setTotal={setTotal}/>
        </div>)
    }) : <div className="cart-page-container-item" style={{justifyContent: 'center'}}><h2>Пусто</h2></div>;

    const unauthorized = error === 'Refresh token was expired. Please make a new signin request' ? <Unauthorized/> : null;
    const errorMessage = error && error !== 'Refresh token was expired. Please make a new signin request' && error !== 'При отмене заказа произошла ошибка'? <Page404/> : null;
    const spinner = loading ? <div className="login-page-container"><Spinner/></div> : null;
    const buyMessage = buy ? buy : null;
    const content = !(loading || error || buy || !order) ? 
    <div className="cart-page-container">
        <h1>Заказ №{id}</h1>
        {orderListItem}
        <div style={{display: 'flex', justifyContent: 'flex-start', width: '60%', flexDirection: 'column'}}>
            <h1>Итого: {total} &#8381;</h1>
            <h3>Адресс доставки: {order.adress}</h3>
            <h3>Дата доставки: {order.delivery_date}</h3>
            <button className='admin-page-button-submit' onClick={() => removeOrder()}>
                Отменить заказ
            </button>
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

export default OrderPage;