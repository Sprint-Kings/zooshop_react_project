import {Link} from 'react-router-dom';

import './footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-navigation'>
                <div>
                    <Link to={'/'} className='footer-navigation-link'>Главная</Link>
                    <p className='footer-navigation-point'>·</p>
                    <Link to={'/categories'} className='footer-navigation-link'>Категории</Link>
                    <p className='footer-navigation-point'>·</p>
                    <Link to={'/login'} className='footer-navigation-link'>Вход</Link>
                    <p className='footer-navigation-point'>·</p>
                    <Link to={'/register'} className='footer-navigation-link'>Регистрация</Link>
                </div>
                <div>
                    <p>Добрые руки © 2023</p>
                </div>
            </div>
            <div className='footer-support'>
                <p>support: manasow.iw@yandex.ru</p>
            </div>
        </div>
    )
}

export default Footer;