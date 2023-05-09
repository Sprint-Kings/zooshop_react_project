import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';

import './loginPage.css';
import loginImage from '../../img/logIn.jpg';

import AuthService from "../../services/AuthService";

import Spinner from '../spinner/Spinner';

const LoginPage = () => {
    let navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        username: Yup.string()
          .required("Введите логин"),
        password: Yup.string()
          .required("Введите пароль")
    });

    const formik = useFormik({
        initialValues: {
        username: "",
        password: "",
    },
    validationSchema,
    onSubmit: (data) => {
        setLoading(true)
        AuthService.login(data.username, data.password).then(
            () => {
                setLoading(false)
                navigate("/profile");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

                setMessage(resMessage);
                setLoading(false)
            }
        );
                    
    }});

    const spinner = loading ? <div className="login-page-container"><Spinner/></div> : null;
    const content = !loading ?
        <div className="login-page-container" style={{height: '100vh'}}>
            <div className="login-page-column-1">
                <div className="login-page-form-container">
                    <h1>Вход</h1>
                    <form  className="login-page-form" onSubmit={formik.handleSubmit}>
                        <div className="login-page-form-group">
                            <label htmlFor="username">Логин</label>
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
            <div className="login-page-column-2">
                <img src={loginImage} alt="loginimage"></img>
            </div>
        </div> : null;
    return (
        <>
            {spinner}
            {content}
        </>
    );
};

export default LoginPage;