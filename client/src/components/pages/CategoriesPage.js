import './categoriesPage.css';

import { Link } from 'react-router-dom';
import HeaderImage from '../header-image/HeaderImage';

const CategoriesPage = () => {
    return (
        <>
            <HeaderImage image={'/categoriesPage.png'} title={'Каталог'}/>
            <div className='categories-page-container'>
                <Link to={'/categories/Сухой корм'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/196/1967b72d98db4165b9aece24ab891d41.jpg'} alt='Сухой корм'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Сухой корм</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Холистик'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/8db/8dba039edb906830b97b8f57bd639c91.jpg'} alt='Холистик'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Холистик</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Консервы'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/262/262fec01ac6b330d3a4cbcfe5c3e049d.jpg'} alt='Консервы'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Консервы</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Лечебный и ветеринарный корм'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/8e5/8e58003430aa519a10394a42e04d7ec0.jpg'} alt='Лечебный и ветеринарный корм'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Лечебный и ветеринарный корм</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Лакомства для чистки зубов'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/eb9/eb97748fb8782e9b6664cb111caac131.jpg'} alt='Лакомства для чистки зубов'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Лакомства для чистки зубов</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Колбаски'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/05a/05ac4e46981401d6bb36a2d4be03a0b3.jpg'} alt='Колбаски'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Колбаски</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Витамины и минералы'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/1e4/1e4bdad87213af4f247ffd38e96a7293.jpg'} alt='Витамины и минералы'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Витамины и минералы</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Сухие лакомства'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/154/1543e7b3cd31ee368668964a6b675208.jpg'} alt='Сухие лакомства'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Сухие лакомства</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Лежаки'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/7f0/7f08b90d8cab81309379b24cbe6dc4ba.jpg'} alt='Лежаки'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Лежаки</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Матрасы'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/fcd/fcded0ecb59ccdfece6ff1e47638d6f5.jpg'} alt='Матрасы'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Матрасы</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Подушки'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/bce/bce58e9600083d327cf12ae1fdfb3252.jpg'} alt='Подушки'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Подушки</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Пледы'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/a89/a893d7b90de11b9e8e4bbce0efe15528.jpg'} alt='Пледы'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Пледы</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Миски'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/2ed/2eddecac58842e1d8fc670e27eacb6ab.jpg'} alt='Миски'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Миски</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Автопоилки'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/2b8/2b8d165c364fd9c263b8a3359fa50ae0.jpg'} alt='Автопоилки'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Автопоилки</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Коврики под миску'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/669/66902f849f5998bbf85b42e7a2b24bd3.jpg'} alt='Коврики под миску'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Коврики под миску</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Фрисби'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/922/92273f31be19c556b5efcedddde6f267.jpg'} alt='Фрисби'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Фрисби</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Грейферы'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/1e1/1e11c9d0dab5467184921a98c227ff2d.jpg'} alt='Грейферы'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Грейферы</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Кольца'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/35f/35ff379f669b9c5da1a4287ba08949d7.jpg'} alt='Кольца'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Кольца</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Мячики'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/c8b/c8b77641df0870fba6e9e98954f29c26.jpg'} alt='Мячики'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Мячики</p>
                    </div>
                </div>
                </Link>
                <Link to={'/categories/Косточки'} style={{ textDecoration: 'none', color: 'black'}}>
                <div className="categories-page-cart-container">
                    <div className='categories-page-cart-column-1'>
                        <img src={'https://4lapy.ru/resize/480x480/upload/iblock/216/2161f4b7c2617a6c286bf523f45ff6df.jpg'} alt='Косточки'></img>
                    </div>
                    <div className='categories-page-cart-column-2'>
                        <p>Косточки</p>
                    </div>
                </div>
                </Link>
                
                

            </div>
        </>
    )
}

export default CategoriesPage;