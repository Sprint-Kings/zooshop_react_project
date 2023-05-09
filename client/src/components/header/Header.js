import logo from '../../img/logo.svg';
import signIn from '../../img/signIn.svg';
import signUp from '../../img/signUp.svg';
import signOut from '../../img/signOut.svg';
import cart from '../../img/cart.svg'
import user from '../../img/user.svg';
import admin from '../../img/admin.svg';

import './Header.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthService from "../../services/AuthService";
import EventBus from "../../services/EventBus";

function Header() {
    const [style, setStyle] = useState(false);
    const [currentUser, setCurrentUser] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
          setCurrentUser(user);
          const roles = localStorage.getItem("roles")
          setShowAdminBoard(roles.includes("ROLE_ADMIN"));
        }

        EventBus.on("logout", () => {
            logOut();
          });
      
          return () => {
            EventBus.remove("logout");
          };
    }, []);

    const logOut = () => {
        AuthService.logout();
        setShowAdminBoard(false);
        setCurrentUser(false);
    };

    return (
        <div>
            <div className='container-header'>
                <div className='logo'>
                    <div className='container-logo-image'>
                    <Link to={'/'} style={{ textDecoration: 'none'}} onClick={() => setStyle(style => style ? !style : style)}>
                        <img className='logo-image' src={logo} alt='logo'></img>
                    </Link>
                    </div>

                    <h3 style={{padding: '2%', fontWeight: 'normal'}}>
                    <Link to={'/'} style={{ textDecoration: 'none'}} onClick={() => setStyle(style => style ? !style : style)}>
                        <span  style={{color: '#f8bc48'}}>Добрые </span>
                        <span  style={{color: '#4dbd3a'}}>руки</span>
                    </Link>
                    </h3>
                </div>

                <div className='navigation'>
                        <button onClick={() => setStyle(style => !style)}><h3>Магазин</h3></button>
                        <button><h3>Новости</h3></button>
                        <button><h3>О нас</h3></button>
                </div>

                <div className='icon-menu'>
                    {currentUser !== false ? (
                        <>
                            {showAdminBoard ? 
                            <Link to={'/admin'} style={{ textDecoration: 'none'}} className='container-icon-image'>  
                                <img className='icon-image' src={admin} alt='user'></img>
                                <p>Админ</p>
                            </Link> : null}
                            <Link to={'/profile'} style={{ textDecoration: 'none'}} className='container-icon-image'>  
                                    <img className='icon-image' src={cart} alt='user'></img>
                                    <p>Корзина</p>
                            </Link>
                            <Link to={'/profile'} style={{ textDecoration: 'none'}} className='container-icon-image'>
                                <img className='icon-image' src={user} alt='user'></img>
                                <p>{currentUser}</p>
                            </Link>
                            <Link to={'/'} style={{ textDecoration: 'none'}} onClick={logOut} className='container-icon-image'>
                                <img className='icon-image' src={signOut} alt='favor'></img>
                                <p>Выход</p>
                            </Link> 
                        </>) : (
                        <>
                            <Link to={'/login'} style={{ textDecoration: 'none'}} className='container-icon-image'>
                                <img className='icon-image' src={signIn} alt='user'></img>
                                <p>Вход</p>
                            </Link>
                            <Link to={'/register'} style={{ textDecoration: 'none'}} className='container-icon-image'>
                                <img className='icon-image' src={signUp} alt='favor'></img>
                                <p>Регистрация</p>
                            </Link> 
                        </>
                    )}
                </div>

            </div>
            <div className='header-subnavigation-menu' style={style ? {overflow: 'visible', maxHeight: 1000} : {overflow: 'hidden', transitionDelay: '.2s'}}>
                <div className='header-subnavigation-menu-container'>
                    <div className='header-subnavigation-menu-container-column' style={style ? {overflow: 'visible', marginTop: 0} : {overflow: 'hidden', marginTop: 1000, transitionDelay: 0}}>
                        <h2>Корм для собак</h2>
                        <Link to={'/categories/Сухой корм'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Сухой корм</h3></Link>
                        <Link to={'/categories/Холистик'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Холистик</h3></Link>
                        <Link to={'/categories/Консервы'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Консервы</h3></Link>
                        <Link to={'/categories/Лечебный и ветеринарный корм'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Лечебный и ветеринарный корм</h3></Link>
                    </div>
                    <div className='header-subnavigation-menu-container-column' style={style ? {overflow: 'visible', marginTop: 0, transitionDelay: '.2s'} : {overflow: 'hidden', marginTop: 1000, transitionDelay: 0}}>
                        <h2>Лакомства</h2>
                        <Link to={'/categories/Лакомства для чистки зубов'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Лакомства для чистки зубов</h3></Link>
                        <Link to={'/categories/Колбаски'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Колбаски</h3></Link>
                        <Link to={'/categories/Витамины и минералы'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Витамины и минералы</h3></Link>
                        <Link to={'/categories/Сухие лакомства'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Сухие лакомства</h3></Link>
                    </div>
                    <div className='header-subnavigation-menu-container-column' style={style ? {overflow: 'visible', marginTop: 0, transitionDelay: '.1s'} : {overflow: 'hidden', marginTop: 1000, transitionDelay: 0}}>
                        <h2>Лежаки</h2>
                        <Link to={'/categories/Лежаки'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Лежаки</h3></Link>
                        <Link to={'/categories/Матрасы'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Матрасы</h3></Link>
                        <Link to={'/categories/Подушки'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Подушки</h3></Link>
                        <Link to={'/categories/Пледы'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Пледы</h3></Link>
                    </div>
                    <div className='header-subnavigation-menu-container-column' style={style ? {overflow: 'visible', marginTop: 0, transitionDelay: '.2s'} : {overflow: 'hidden', marginTop: 1000, transitionDelay: 0}}>
                        <h2>Миски</h2>
                        <Link to={'/categories/Миски'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Миски</h3></Link>
                        <Link to={'/categories/Автопоилки'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Автопоилки</h3></Link>
                        <Link to={'/categories/Коврики под миску'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Коврики под миску</h3></Link>
                    </div>
                    <div className='header-subnavigation-menu-container-column' style={style ? {overflow: 'visible', marginTop: 0} : {overflow: 'hidden', marginTop: 1000, transitionDelay: 0}}>
                        <h2>Игрушки</h2>
                        <Link to={'/categories/Фрисби'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Фрисби</h3></Link>
                        <Link to={'/categories/Грейферы'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Грейферы</h3></Link>
                        <Link to={'/categories/Кольца'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Кольца</h3></Link>
                        <Link to={'/categories/Мячики'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Мячики</h3></Link>
                        <Link to={'/categories/Косточки'}  onClick={() => setStyle(style => !style)} style={{ textDecoration: 'none'}} className='header-button-subtitle'><h3>Косточки</h3></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
// #f8bc48
//#4dbd3a
//#2a556c
//#2f3c43
export default Header;