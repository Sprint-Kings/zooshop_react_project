
import { Link } from 'react-router-dom';


import HeaderImage from "../header-image/HeaderImage";
import BigStory from "../big-story/BigStory";
import Carousel from '../carousel/Carousel';
import ProductCart from '../productCart/ProductCart.js';
import NewsCart from '../newsCart/NewsCart';

const MainPage = () => {

    return (
        <div>   
            <HeaderImage image={'/main_image.jpg'} btn={true} title={'Добро пожаловать'}/>
            <BigStory/>
            <div style={{width: '80%', margin: '0 auto', marginTop: '100px', color: '#2a556c'}}>
                <h1>Читайте</h1>
                <Carousel>
                    <NewsCart id={1}/>
                    <NewsCart id={2}/>
                    <NewsCart id={3}/>
                    <NewsCart id={4}/>
                    <NewsCart id={5}/>
                    <NewsCart id={5}/>
                </Carousel>
                <h1>Наши товары</h1>
                <Carousel>
                    <ProductCart id={1}/>
                    <ProductCart id={2}/>
                    <ProductCart id={3}/>
                    <ProductCart id={4}/>
                    <ProductCart id={18}/>
                </Carousel>
            </div>
        </div>
    )
}

export default MainPage;