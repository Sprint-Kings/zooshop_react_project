import {useState, useEffect, useMemo} from 'react';
import useZooService from '../../services/ZooService';
import { Link } from 'react-router-dom';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './big-story.css';

const BigStory= () => {
    const [news, setNews] = useState(null);

    const id = useMemo(()=> {
        return Math.floor(Math.random() * (5 - 1)) + 1
    }, [])

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
    let style = {textDecoration: 'none', color: 'black'}
    if (spinner) {
        style = {textDecoration: 'none', color: 'black', height: '600px'}
    }
    return (
        <Link className='container-big-story' to={content ? `/news/${id}` : null} style={style}> 
            {errorMessage}
            {spinner}
            {content}
        </Link> 
    );
}

const View = ({news}) => {
    const {title, description, thumbnail} = news;
    return (
        <>
        
            <div className='container-big-story-column-1'>
                <div className='container-big-story-text'>
                    <p>Новость</p>
                    <h1>{title}</h1>
                    <p>{description.slice(0,510)+'...'}</p>
                </div>
                <div className='container-listen'>
                    <h1>Читать</h1>
                </div>
            </div>
            <div className='container-big-story-column-2'>
                <img className='big-story-image' src={thumbnail}></img>
            </div>
        
        </>
    )
}
// #f8bc48
//#4dbd3a
//#2a556c
//#2f3c43
export default BigStory;