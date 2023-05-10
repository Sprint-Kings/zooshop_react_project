import React, { useEffect, useState } from "react";
import useUserService from '../../services/UserService';

import './profilePage.css';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    updateProfile();
  }, [])

  
  
  const {loading, error, getUserBoard, clearError, refreshToken} = useUserService();

  useEffect(() => {
    if (error === 'Could not fetch http://localhost:8083/api/user, status: 401') {
      refreshToken().then(
        () => {
          getUserBoard()
            .then(updateProfile);
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

  const updateProfile = () => {
    clearError();
    getUserBoard()
        .then(onProfileLoaded);
  }

  const onProfileLoaded = (profile) => {
      setCurrentUser(profile);
      
  }

  console.log(currentUser)
  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error || !currentUser) ? <View profile={currentUser}/> : null;
  return (
    <div>
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({profile}) => {
  const {first_name, last_name, username, email} = profile
  return (
      <div className="profile-page-container">
          <div className="profile-page-column-1">
              <h1>Мой аккаунт</h1>
              <h2>Имя: {first_name}</h2>
              <h2>Фамилия: {last_name}</h2>
              <h2>Логин: {username}</h2>
              <h2>Почта: {email}</h2>
          </div>
          <div className="profile-page-column-2">

          </div>
      </div>
  )
}

export default ProfilePage;