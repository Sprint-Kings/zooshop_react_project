
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useZooService from '../../services/ZooService';

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
        <ul>
            <li>
                <img src={thumbnail} alt={title}/>
                <p>{title}</p>
                <p>{author}</p>
                <p>{data}</p>
                <p>{description}</p>
            </li>
        </ul>
    )
}

export default SingleNewsPage;