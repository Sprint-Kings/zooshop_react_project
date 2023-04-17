
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useZooService from '../../services/ZooService';

import NewsCart from '../newsCart/NewsCart';

const SingleNewsPage = () => {
    const {newsId} = useParams();
    const [news, setNews] = useState(null);

    const {loading, error, getNews, clearError} = useZooService();
    
    useEffect(() => {
        updateProduct()
    }, [newsId])

    const updateProduct = () => {
        clearError();
        getNews(newsId)
            .then(onNewsLoaded)
        
    }

    const onNewsLoaded = (news) => {
        setNews(news);
    }
    console.log(news)
    const errorMessage = error ? <p>Error</p> : null;
    const spinner = loading ? <p>spiner</p> : null;
    const content = !(loading || error || !news) ? <View news={news}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({news}) => {
    const {title, author, data, thumbnail, description} = news;

    return (
        <div>
            <img src={thumbnail} alt={title} style={{width: '100%', height: '500px', objectFit: 'none'}}/>
            <div style={{width: '50%', margin: '0 auto', marginTop: '100px'}}>
                <h1>{title}</h1>
                <h3 style={{whiteSpace: 'normal'}}>{author}    &bull;  {data}</h3>
                
                
                <p style={{fontSize: '20px', whiteSpace: 'pre-line'}}>{description}</p>
            </div>
            <h1 style={{textAlign: 'center', margin: '50px'}}>Читайте также</h1>
            <div style={{display: 'flex', 
                justifyContent: 'center', 
                height: '300px', 
                width: '50%', 
                margin: '0 auto', marginBottom: '50px'}}>
                <NewsCart id={1}/>
                <NewsCart id={1}/>
                <NewsCart id={1}/>
            </div>
                    
        </div>
    )
}

export default SingleNewsPage;