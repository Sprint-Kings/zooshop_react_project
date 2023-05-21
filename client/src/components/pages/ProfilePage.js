import { useEffect, useState } from "react";
import useUserService from '../../services/UserService';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";

import './profilePage.css';

import Page404 from "./404";
import Unauthorized from "../unauthorized/Unnauthorized";
import Spinner from '../spinner/Spinner';

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [adresses, setAdresses] = useState([]);
  const [orders, setOrders] = useState([])

  useEffect(() => {
    updateProfile();
    updateAdresses();
    updateOrders();
  }, [])

  const validationSchema = Yup.object().shape({
    adress: Yup.string()
      .required("Введите адрес"),
  });

  const formik = useFormik({
    initialValues: {
    adress: "",
  },
  validationSchema,
  onSubmit: (data, helpers) => {
      addAdress(data).then(
          () => {
              updateAdresses();
          }
      );
      if (!error) {
        helpers.resetForm({
          data,
      });
      }
  }});
  
  const {loading, error, getUserBoard, clearError, refreshToken, getAdresses, addAdress, deleteAdress, getOrders} = useUserService();

  useEffect(() => {
    if (error === 'Unauthorized! Access Token was expired!') {
      refreshToken().then(
        () => {
          updateProfile();
        }
      );
    }
  },[error])

  const updateProfile = () => {
    clearError();
    getUserBoard()
        .then(onProfileLoaded);
  }

  const onProfileLoaded = (profile) => {
      setCurrentUser(profile);
      
  }

  const updateAdresses = () => {
    clearError();
    getAdresses()
        .then(onAdressesLoaded);
  }

  const onAdressesLoaded = (adresses) => {
      setAdresses(adresses); 
  }

  const updateOrders = () => {
    clearError();
    getOrders()
        .then(onOrdersLoaded);
  }

  const onOrdersLoaded = (orders) => {
      setOrders(orders); 
  }
  
  const ordersList = orders.length !== 0 ? 
    orders.map(order => {
      return <tr>
              <td><Link to={`/order/${order.id}`} style={{ textDecoration: 'none', color: 'white'}}><p>{order.id}</p></Link></td>
              <td><Link to={`/order/${order.id}`} style={{ textDecoration: 'none', color: 'white'}}>{order.adress}</Link></td>
              <td><Link to={`/order/${order.id}`} style={{ textDecoration: 'none', color: 'white'}}>{order.total} &#8381;</Link></td>
              <td><Link to={`/order/${order.id}`} style={{ textDecoration: 'none', color: 'white'}}>{order.delivery_date}</Link></td>
            
            </tr>
  }): <tr><td colSpan='4' style={{padding: '5%'}}>У вас пока нет заказов</td></tr>;

  const adressesList = adresses.length !== 0 ? 
    adresses.map(adress => {
      return <tr>
              <td>{adress}</td>
              <td>
                <p className="profile-page-button" onClick={() => {deleteAdress(adress).then(() => updateAdresses())}}>
                  удалить
                </p>
              </td>
            </tr>
  }): <tr><td style={{padding: '5%'}}>У вас пока нет адресов</td></tr>;

  const unauthorized = error === 'Refresh token was expired. Please make a new signin request' ? <Unauthorized/> : null;
  const errorMessage = error && error !== 'Refresh token was expired. Please make a new signin request'? <Page404/> : null;
  const spinner = loading ? <div className="login-page-container"><Spinner/></div> : null;
  const content = !(loading || error || !currentUser) ? 
  <div className="profile-page-container">
          <div className="profile-page-column-1">
              <h1>Мой аккаунт</h1>
              <h2>Имя: {currentUser.first_name}</h2>
              <h2>Фамилия: {currentUser.last_name}</h2>
              <h2>Логин: {currentUser.username}</h2>
              <h2>Почта: {currentUser.email}</h2>
          </div>
          <div className="profile-page-column-2">
            <h1>Мои адреса</h1>
            <form onSubmit={formik.handleSubmit} style={{width: '70%'}}>
            <table className="profile-page-table">
              {adressesList}
              <tr>
                <td colSpan='2'>
              <input
                className={
                  (formik.errors.adress && formik.touched.adress
                    ? ' admin-page-input-invalid' : 'admin-page-input')}
                    style={{width: '90%', paddingTop: '1%'}}
                type="text"
                name="adress"
                value={formik.values.adress}
                onChange={formik.handleChange}
                placeholder='Aдрес'
              />
              </td>
              </tr>
            </table>
            <button className='admin-page-button-submit' type="submit">
              Добавить
            </button>
            {formik.errors.adress && formik.touched.adress
                    ? <p className="admin-page-invalid-message">{formik.errors.adress}</p>
                  : null}
            </form>
            <h1>Мои заказы</h1>
            <table className="profile-page-table" style={{width: '90%', marginBottom: '5%'}}>
              <td style={{fontWeight: 600}}><p>Номер заказа</p></td>
              <td style={{fontWeight: 600}}>Адрес доставки</td>
              <td style={{fontWeight: 600}}>Сумма</td>
              <td style={{fontWeight: 600}}>Дата доставки</td>
              {ordersList}
            </table>
          </div>
      </div> : null;
  return (
    <div>
      {unauthorized}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

export default ProfilePage;