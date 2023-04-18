import {useState, useEffect} from 'react';

import './categoryPage.css'

import ColorFilter from "../colorFilter/ColorFilter";
import ProductCart from '../productCart/ProductCart';
import useZooService from '../../services/ZooService';

const CategoryPage = () => {

    const [productList, setProductList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(1);
    const [productEnded, setProductEnded] = useState(false);
    
    const {getAllProducts} = useZooService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);

        getAllProducts(offset, 3)
            .then(onProductListLoaded)
    }

    const onProductListLoaded = (newProductList) => {
        let ended = false;
        if (newProductList.length < 3) {
            ended = true;
        }

        setProductList(productList => [...productList, ...newProductList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 3);
        setProductEnded(ended);
    }

    function renderItems(arr) {
        const items =  arr.map((item, i) => { 
            return (
                <ProductCart id={item.id}/>
            )
        });

        return (
            <>
                {items}
            </>
        )
    }
    
    function renderBrand(arr, brand) {
        const items =  arr.filter(item => item.brand === brand)
        console.log(items)
        setProductList(items)
         
    }
    const items = renderItems(productList);

    return (
        <div className='category-page-container'>
            <div className='category-page-column-1'>
                <ColorFilter/>
            </div>
            <div className='category-page-column-2'>
                {items}
            </div>
            <button 
                disabled={newItemLoading}
                style={{'display': productEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div>load more</div>
            </button>
            <button 
                onClick={() => renderBrand(productList, 'Grandin')}>
                <div>change brand</div>
            </button>
        </div>
    )
}

export default CategoryPage;