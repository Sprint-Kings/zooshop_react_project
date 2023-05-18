import { useEffect, useState } from "react";
import useUserService from '../../services/UserService';
import { useFormik } from "formik";

import './adminPage.css';

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
    console.log(data);
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
          },
          (error) => {
              const resMessage =
              (error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString();
              setErrorSubmit(resMessage)
          }
      );
  }});
  
  const {loading, error, getAdminBoard, clearError, refreshToken, getUsers, addUser, deleteUser} = useUserService();

  useEffect(() => {
    if (error === 'Could not fetch http://localhost:8083/api/admin, status: 401') {
      refreshToken().then(
        () => {
          getAdminBoard()
            .then(updateNews);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

        }
      );
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

  const usersList = users.length !== 0 ? 
    users.map(user => {
      return <tr>
              <th style={{borderLeft: 0}}>{user.id}</th>
              <th>{user.username}</th>
              <th>{user.first_name}</th>
              <th>{user.last_name}</th>
              <th>{user.email}</th>
              <th style={{borderRight: 0}}>
                <p className="admin-page-button" style={{textAlign: 'center'}}onClick={() => {deleteUser(user.id).then(() => updateUsers())}}>
                  Удалить
                </p>
              </th>
            </tr>
  }): <tr><th>Пользователей нет</th></tr>;

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error || !currentUser) ? 
  <div className="admin-page-container">
            <h1>Список пользователей</h1>
            <form onSubmit={formik.handleSubmit} style={{width: '80%'}}>
            <table className="admin-page-table">
              <tr>
                <th style={{borderLeft: 0, fontWeight: 600}}>Id</th>
                <th style={{fontWeight: 600}}>Никнейм</th>
                <th style={{fontWeight: 600}}>Имя</th>
                <th style={{fontWeight: 600}}>Фамилия</th>
                <th style={{borderRight: '1px', fontWeight: 600}}>Почта</th>
                <th> </th>
              </tr>
              {usersList}
              <tr>
                <th style={{borderLeft: 0}}>
                  <input
                    className='admin-page-input'
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                </th>
                <th>
                  <input
                    className='admin-page-input'
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                </th>
                <th>
                  <input
                    className='admin-page-input'
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                </th>
                <th>
                  <input
                    className='admin-page-input'
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </th>
                <th>
                  <input
                    className='admin-page-input'
                    type="text"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </th>
                <th>
                  <input
                    className='admin-page-input'
                    type="text"
                    name="roles"
                    value={formik.values.roles}
                    onChange={formik.handleChange}
                  />
                </th>
              </tr>
            </table>
            <button type="submit">
              Добавить
            </button>
            <p>{errorSubmit}</p>
          </form>
      </div> : null;
  return (
    <div style={{marginTop: '20%'}}>
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({news}) => {
    const {id, username, email} = news;
    return (
        <>
            <header>
          <h3>
            <strong>{username}</strong> Profile
          </h3>
        </header>
  
        <p>
          <strong>Id:</strong> {id}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <strong>Authorities:</strong>
  
        </>
    )
  }

export default AdminPage;