import { useState, useEffect } from 'react';
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
        <div className="cart-container">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )  
}

const View = ({news}) => {
    const {title, thumbnail} = news;
    return (
        <>
            <img src={thumbnail} style={{width: '60%'}}></img>
            <p>{title}</p>
        </>
    )
}

export default NewsCart;