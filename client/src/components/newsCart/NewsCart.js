import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useZooService from '../../services/ZooService';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './newsCart.css';


const NewsCart = ({id}) => {
    const [news, setNews] = useState(null);

    const {loading, error, getNews, clearError} = useZooService();
    
    useEffect(() => {
        updateNews();
    }, [])

    const updateNews = () => {
        clearError();
        getNews(id)
            .then(onNewsLoaded);
    }

    const onNewsLoaded = (news) => {
        setNews(news);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !news) ? <View news={news}/> : null;
    
    return (
        <Link to={content ? `/news/${id}` : null} style={{ textDecoration: 'none', color: 'black'}}>
        <div className="news-cart-container">
            {errorMessage}
            {spinner}
            {content}
        </div>
        </Link>
    )  
}

const View = ({news}) => {
    const {title, thumbnail} = news;
    return (
        <>
            <div className='news-cart-column-1'>
                <img src={thumbnail} alt={title}></img>
            </div>
            <div className='news-cart-column-2'>
                <p>{title.length > 30 ? title.slice(0,30)+'...' : title}</p>
            </div>
        </>
    )
}

export default NewsCart;