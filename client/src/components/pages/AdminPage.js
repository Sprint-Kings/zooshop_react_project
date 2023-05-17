import { useEffect, useState } from "react";
import useUserService from '../../services/UserService';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const AdminPage = () => {
  const [currentUser, setCurrentUser] = useState([])
  const [users, setUsers] = useState([]);

  useEffect(() => {
    updateNews();
    updateUsers();
  }, [])

  
  
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
              <th>{user.id}</th>
              <th>{user.username}</th>
              <th>
                <p className="profile-page-button" onClick={() => {deleteUser(user.id).then(() => updateUsers())}}>
                  удалить
                </p>
              </th>
            </tr>
  }): <tr><th>Пользователей нет</th></tr>;

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
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

            <table className="profile-page-table">
              {usersList}
            
            </table>
          </div>
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