import { useState} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

import './loginPage.css';
import loginImage from '../../img/SignUp.jpg';

import AuthService from "../../services/AuthService";

import Spinner from '../spinner/Spinner';

const RegistrationPage = () => {
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        username: Yup.string()
          .required("Придумайте имя пользователя")
          .min(4, "Имя пользователя должно иметь минимум 4 символа")
          .max(20, "Имя пользователя не должно быть больше 20 символов"),
        email: Yup.string().required("Введите электронную почту").email("Неправильный адрес электронной почты"),
        password: Yup.string()
          .required("Придумайте пароль")
          .min(4, "Пароль должен иметь минимум 4 символа")
          .max(40, "Пароль не должен быть больше 40 символов")
    });

    const formik = useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
    },
    validationSchema,
    onSubmit: (data) => {
        setLoading(true)
        AuthService.register(data.username, data.email, data.password).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                setLoading(false)
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
                setMessage(resMessage);
                setSuccessful(false);
                setLoading(false)
            }
          );           
    }});

    const spinner = loading ? <div className="login-page-container"><Spinner/></div> : null;
    const congratulation = successful && !loading ? 
        <div className="login-page-container">
          <div className="login-page-column-1">
            <div className="registration-page-form-container">
              <h2>{message}</h2>
            </div>
          </div>
          <div className="registration-page-column-2">
            <img src={loginImage} alt="loginimage"></img>
          </div>
        </div> : null;
    const content = !successful && !loading ? 
        <div className="login-page-container">
            <div className="login-page-column-1">
                <div className="registration-page-form-container">
                    <h1>Регистрация</h1>
                    <form  className="login-page-form" onSubmit={formik.handleSubmit}>
                        <div className="login-page-form-group">
                            <label htmlFor="username">Имя пользователя</label>
                            <input
                                type="text"
                                name="username"
                                className={
                                  (formik.errors.username && formik.touched.username
                                    ? ' login-page-input-invalid'
                                    : "login-page-input")
                                }
                                value={formik.values.username}
                                onChange={formik.handleChange}
                            />
                            <p className="login-page-invalid-message">{formik.errors.username && formik.touched.username
                                ? formik.errors.username
                            : null}</p>
                        </div>
                        <div className="login-page-form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="text"
                                name="email"
                                className={
                                  (formik.errors.email && formik.touched.email
                                    ? ' login-page-input-invalid'
                                    : "login-page-input")
                                }
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            <p className="login-page-invalid-message">{formik.errors.email && formik.touched.email
                                ? formik.errors.email
                            : null}</p>
                        </div>
                        <div className="login-page-form-group">
                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                name="password"
                                className={
                                  (formik.errors.password && formik.touched.password
                                    ? ' login-page-input-invalid'
                                    : "login-page-input")
                                }
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            <p className="login-page-invalid-message">{formik.errors.password && formik.touched.password
                                ? formik.errors.password
                            : null}</p>
                        </div>
                        <button className='login-page-button' type="submit">
                            Войти
                        </button>
                        { message ? <p className="login-page-invalid-message">{message}</p> : null}
                    </form>
                </div>
                            
            </div>
            <div className="registration-page-column-2">
                <img src={loginImage} alt="loginimage"></img>
            </div>
        </div> : null;
    
    return (
        <>
            {spinner}
            {congratulation}
            {content}
        </>
    );
};

export default RegistrationPage;