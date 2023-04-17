import logo from '../../img/logo.svg';
import search from '../../img/search.svg';
import user from '../../img/user.svg';
import favourite from '../../img/favourite.svg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='container-header'>
            <div className='logo'>
                <div className='container-logo-image'>
                <Link to={'/'} style={{ textDecoration: 'none'}}>
                    <img className='logo-image' src={logo} alt='logo'></img>
                </Link>
                </div>
                
                <h3 style={{padding: '2%', fontWeight: 'normal'}}>
                <Link to={'/'} style={{ textDecoration: 'none'}}>
                    <span  style={{color: '#f8bc48'}}>Добрые </span>
                    <span  style={{color: '#4dbd3a'}}>руки</span>
                </Link>
                </h3>
                
            </div>
            
            <div className='navigation'>
                    <h3>Магазин</h3>
                    <h3>Новости</h3>
                    <h3>О нас</h3>
            </div>
            <div className='icon-menu'>
                <div className='container-icon-image'>
                    <img className='icon-image' src={search}></img>
                </div>
                <div className='container-icon-image'>
                    <img className='icon-image' src={user}></img>
                </div>
                <div className='container-icon-image'>
                    <img className='icon-image' src={favourite}></img>
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