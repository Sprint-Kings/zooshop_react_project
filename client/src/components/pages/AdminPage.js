import { useEffect, useState } from "react";
import useUserService from '../../services/UserService';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const AdminPage = () => {
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    updateNews();
  }, [])

  
  
  const {loading, error, getAdminBoard, clearError, refreshToken} = useUserService();

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

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error || !currentUser) ? <View news={currentUser}/> : null;
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