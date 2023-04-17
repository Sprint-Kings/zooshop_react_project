
import { Link } from 'react-router-dom';


import HeaderImage from "../header-image/HeaderImage";
import BigStory from "../big-story/BigStory";
import Carousel from '../carousel/Carousel';
import ProductCart from '../productCart/ProductCart.js';
import NewsCart from '../newsCart/NewsCart';

const MainPage = () => {

    return (
        <div>   
            <HeaderImage/>
            <BigStory/>
            <div style={{width: '75%', margin: '0 auto'}}>
            <h1>Читайте</h1>
            <Carousel>
                <Link to={`/news/1`}><NewsCart id={1}/></Link>
                <Link to={`/news/2`}><NewsCart id={2}/></Link>
                <Link to={`/news/3`}><NewsCart id={3}/></Link>


            </Carousel>
            <Carousel>
                <Link to={`/product/1`}><ProductCart/></Link>
                <Link to={`/product/2`}><ProductCart/></Link>
                <Link to={`/news/2`}><ProductCart/></Link>
                <Link to={`/news/2`}><ProductCart/></Link>
                <Link to={`/news/2`}><ProductCart/></Link>
            </Carousel>
            </div>
        </div>
    )
}

export default MainPage;