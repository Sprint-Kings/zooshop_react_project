import { useEffect, useState } from "react";
import useUserService from '../../services/UserService';
import { useFormik } from "formik";

import './profilePage.css';

import Unauthorized from "../unauthorized/Unnauthorized";
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [adresses, setAdresses] = useState([]);

  useEffect(() => {
    updateProfile();
    updateAdresses();
  }, [])

  const formik = useFormik({
    initialValues: {
    adress: "",
  },
  onSubmit: (data) => {
      addAdress(data).then(
          () => {
              updateAdresses();
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
  }});
  
  const {loading, error, getUserBoard, clearError, refreshToken, getAdresses, addAdress, deleteAdress} = useUserService();

  useEffect(() => {
    if (error === 'Unauthorized! Access Token was expired!') {
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

  const updateAdresses = () => {
    clearError();
    getAdresses()
        .then(onAdressesLoaded);
  }

  const onAdressesLoaded = (adresses) => {
      
      setAdresses(adresses);
      
  }

  const adressesList = adresses.length !== 0 ? 
    adresses.map(adress => {
      return <tr>
              <th>{adress}</th>
              <th>
                <p className="profile-page-button" onClick={() => {deleteAdress(adress).then(() => updateAdresses())}}>
                  удалить
                </p>
              </th>
            </tr>
  }): <tr><th>У вас пока нет адресов</th></tr>;

  const unauthorized = error === 'Refresh token was expired. Please make a new signin request' ? <Unauthorized/> : null;
  const errorMessage = error && error !== 'Refresh token was expired. Please make a new signin request'? <ErrorMessage/> : null;
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
                <th>
              <input
                type="text"
                name="adress"
                value={formik.values.adress}
                onChange={formik.handleChange}
              />
              </th>
              </tr>
            </table>
            <button type="submit">
              Добавить
            </button>
            </form>
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