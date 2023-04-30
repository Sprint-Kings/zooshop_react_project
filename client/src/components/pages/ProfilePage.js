import React, { useEffect, useState } from "react";
import useUserService from '../../services/UserService';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    updateNews();
  }, [])

  
  
  const {loading, error, getUserBoard, clearError, refreshToken} = useUserService();

  useEffect(() => {
    if (error === 'Could not fetch http://localhost:8083/api/user, status: 401') {
      refreshToken().then(
        () => {
          getUserBoard()
            .then(onNewsLoaded);
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
    getUserBoard()
        .then(onNewsLoaded);
  }

  const onNewsLoaded = (news) => {
      setCurrentUser(news);
      
  }

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error || !currentUser) ? <View news={currentUser}/> : null;
  return (
    <div>
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

export default ProfilePage;