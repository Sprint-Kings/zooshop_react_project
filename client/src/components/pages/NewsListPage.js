import { useState, useEffect } from 'react';

import useZooService from '../../services/ZooService';

import HeaderImage from "../header-image/HeaderImage";

import NewsCart from '../newsCart/NewsCart';

const NewsListPage = () => {

    const [newsList, setNewsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(1);
    const [newsEnded, setNewsEnded] = useState(false);

    const {getAllNews} = useZooService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);

        getAllNews(offset, 3)
            .then(onNewsListLoaded)
    }

    const onNewsListLoaded = (newProductList) => {
        let ended = false;
        if (newProductList.length < 3) {
            ended = true;
        }
        setNewsList(productList => [...productList, ...newProductList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 3);
        setNewsEnded(ended);
    }

    function renderItems(arr) {
        
        const items =  arr.map((item, i) => { 
            return (
                <div key={item.id} style={{width: '30%'}}>
                    <NewsCart id={item.id}/>
                </div>
            )
        });
        return (
            <>
                {items}
            </>
        )
    }

    const items = renderItems(newsList);
    return (
        <div>   
            <HeaderImage image={'/news_list_page.png'} title={'Изучайте'} subtitle={'Подборка интересных статей про уход за собаками и многое другое'}/>
            <div style={{width: '80%', margin: '0 auto', marginTop: '100px'}}>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {items}
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'center', margin: '5%'}}>   
                    <button 
                        disabled={newItemLoading}
                        className='admin-page-button-submit'
                        style={{'display': newsEnded ? 'none' : 'block'}}
                        onClick={() => onRequest(offset)}>
                        <div>Загрузить еще</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsListPage;