import { useEffect, useState } from "react";
import useUserService from '../../services/UserService';
import { useFormik } from "formik";
import * as Yup from 'yup';

import './adminPage.css';

import Page404 from "./404";
import Unauthorized from "../unauthorized/Unnauthorized";
import Spinner from '../spinner/Spinner';

const AdminPage = () => {

  const [users, setUsers] = useState([]);
  const [errorSubmit, setErrorSubmit] = useState();

  useEffect(() => {
    updateUsers();
  }, [])

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Введите никнейм"),
    firstName: Yup.string()
      .required('Введите имя'),
    lastName: Yup.string()
      .required('Введите фамилию'),
    email: Yup.string()
      .required('Введите почту'),
    password: Yup.string()
      .required("Введите пароль")
  });

  const formik = useFormik({
    initialValues: {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roles: ""
  }, validationSchema,
  onSubmit: (data, helpers) => {
      addUser({
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        roles: data.roles.split(' ')
      }).then(
          () => {  
              updateUsers();
          }
          
      );
      if (!error) {
        helpers.resetForm({
          data,
      });
      }
  }});
  
  const {loading, error, clearError, refreshToken, getUsers, addUser, deleteUser} = useUserService();

  useEffect(() => {
    if (error === 'Unauthorized! Access Token was expired!' || error === 'Failed to fetch' || error === 'Require Admin Role!') {
      refreshToken().then(
        () => {
          updateUsers()
        }
      );
    } 
    else {
      setErrorSubmit(error)
    }
    
    
  },[error])



  const updateUsers= () => {
    clearError();
    getUsers()
        .then(onUsersLoaded);
  }

  const onUsersLoaded = (users) => {
      setUsers(users);
  }

  const removeUser = (id) => {
    deleteUser(id).then(
      () => {
      updateUsers();
      })
    }

  

  const usersList = users.length !== 0 ? 
    users.map(user => {
      return <tr>
              <td style={{borderLeft: 0}}>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td style={{borderRight: 0}}>
                <p className="admin-page-button" style={{textAlign: 'center'}} onClick={() => removeUser(user.id)}>
                  Удалить
                </p>
              </td>
            </tr>
  }): () => updateUsers();

  const unauthorized = error === 'Refresh token was expired. Please make a new signin request' ? <Unauthorized/> : null;
  const errorMessage = error && !errorSubmit && error !== 'Refresh token was expired. Please make a new signin request' ? <Page404/> : null;
  const spinner = loading ? <div className="login-page-container"><Spinner/></div>: null;
  const content = !(loading || (error && (errorSubmit === 'Refresh token was expired. Please make a new signin request' || errorSubmit === null))) ? 
  <div className="admin-page-container">
            <h1>Список пользователей</h1>
            <form onSubmit={formik.handleSubmit} style={{width: '80%'}}>
            <table className="admin-page-table">
              <tr>
                <td style={{borderLeft: 0, fontWeight: 600}}><p>Id</p></td>
                <td style={{fontWeight: 600}}>Никнейм</td>
                <td style={{fontWeight: 600}}>Имя</td>
                <td style={{fontWeight: 600}}>Фамилия</td>
                <td style={{borderRight: '1px', fontWeight: 600}}>Почта</td>
                <td> </td>
              </tr>
              {usersList}
              <tr>
                <td style={{borderLeft: 0}}>
                  <input
                    className={
                      (formik.errors.username && formik.touched.username
                        ? ' admin-page-input-invalid' : 'admin-page-input')}
                    placeholder="Никнейм"
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.username && formik.touched.username
                    ? <p className="admin-page-invalid-message">{formik.errors.username}</p>
                  : null}
                </td>
                <td>
                  <input
                    className={
                      (formik.errors.firstName && formik.touched.firstName
                        ? ' admin-page-input-invalid' : 'admin-page-input')}
                    placeholder="Имя"
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.firstName && formik.touched.firstName
                    ? <p className="admin-page-invalid-message">{formik.errors.firstName}</p>
                  : null}
                </td>
                <td>
                  <input
                    className={
                      (formik.errors.lastName && formik.touched.lastName
                        ? ' admin-page-input-invalid' : 'admin-page-input')}
                    placeholder="Фамилия"
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.lastName && formik.touched.lastName
                    ? <p className="admin-page-invalid-message">{formik.errors.lastName}</p>
                  : null}
                </td>
                <td>
                  <input
                    className={
                      (formik.errors.email && formik.touched.email
                        ? ' admin-page-input-invalid' : 'admin-page-input')}
                    placeholder="Почта"
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email
                    ? <p className="admin-page-invalid-message">{formik.errors.email}</p>
                  : null}
                </td>
                <td>
                  <input
                    className={
                      (formik.errors.password && formik.touched.password
                        ? ' admin-page-input-invalid' : 'admin-page-input')}
                    placeholder="Пароль"
                    type="text"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && formik.touched.password
                    ? <p className="admin-page-invalid-message">{formik.errors.password}</p>
                  : null}
                </td>
                <td>
                  <input
                    className='admin-page-input'
                    placeholder="Роли (необяз)"
                    type="text"
                    name="roles"
                    value={formik.values.roles}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
            </table>
            <button className='admin-page-button-submit' type="submit">
              Добавить
            </button>
            <p className='admin-page-invalid-message'>{errorSubmit}</p>
          </form>
      </div> : null;
  return (
    <>
      {errorMessage}
      {unauthorized}
      {spinner}
      {content}
    </>
  );
};

export default AdminPage;