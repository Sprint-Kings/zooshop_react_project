import { useEffect, useState } from "react";
import useUserService from '../../services/UserService';
import { useFormik } from "formik";

import './adminPage.css';

import Unauthorized from "../unauthorized/Unnauthorized";
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const AdminPage = () => {
  const [currentUser, setCurrentUser] = useState([])
  const [users, setUsers] = useState([]);
  const [errorSubmit, setErrorSubmit] = useState();
  useEffect(() => {
    updateNews();
    updateUsers();
  }, [])

  const formik = useFormik({
    initialValues: {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roles: ""
  },
  onSubmit: (data) => {
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
  }});
  
  const {loading, error, getAdminBoard, clearError, refreshToken, getUsers, addUser, deleteUser} = useUserService();

  useEffect(() => {
    if (error === 'Unauthorized! Access Token was expired!') {
      refreshToken().then(
        () => {
          getAdminBoard()
            .then(updateNews);
        }
      );
    } else {
      setErrorSubmit(error)
    }
    
    
  },[error])

  const updateNews = () => {
    clearError();
    getAdminBoard()
        .then(onNewsLoaded);
  }

  const onNewsLoaded = (news) => {
      setCurrentUser(news);
  }

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
      },
      (error) => {
        const resMessage =
        (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();
        setErrorSubmit(resMessage)
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
  const errorMessage = error && !errorSubmit && error !== 'Refresh token was expired. Please make a new signin request' ? <ErrorMessage/> : null;
  const spinner = loading ? <div className="login-page-container"><Spinner/></div>: null;
  const content = !(loading || (error && !errorSubmit) || !currentUser) ? 
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
                    className='admin-page-input'
                    placeholder="Никнейм"
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                </td>
                <td>
                  <input
                    className='admin-page-input'
                    placeholder="Имя"
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                </td>
                <td>
                  <input
                    className='admin-page-input'
                    placeholder="Фамилия"
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                </td>
                <td>
                  <input
                    className='admin-page-input'
                    placeholder="Почта"
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </td>
                <td>
                  <input
                    className='admin-page-input'
                    placeholder="Пароль"
                    type="text"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </td>
                <td>
                  <input
                    className='admin-page-input'
                    placeholder="Роли"
                    type="text"
                    name="roles"
                    value={formik.values.roles}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
            </table>
            <button type="submit">
              Добавить
            </button>
            <p>{errorSubmit}</p>
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