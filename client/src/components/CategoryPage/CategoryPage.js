import {useState, useEffect} from 'react';

import './categoryPage.css'

import HeaderImage from "../header-image/HeaderImage";
import BrandFilter from '../brandFilter/BrandFilter';
import ColorFilter from "../colorFilter/ColorFilter";
import ProductCart from '../productCart/ProductCart';
import useZooService from '../../services/ZooService';

const CategoryPage = ({category, title, subtitle=false}) => {

    const [fullProductList, setFullProductList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(1);
    const [productEnded, setProductEnded] = useState(false);
    const [filter, setFilter] = useState([]);

    const {getAllProductsByCategory} = useZooService();

    useEffect(() => {
        onRequest(offset, true);
        setFullProductList(productList);
    }, [])

    useEffect(() => {
        const p = renderBrand(productList, filter);
        setProductList(p)
    }, [filter])

    const updateFilter = (singleFilter) => {
        const index = filter.indexOf(singleFilter)
        if (index !== -1) {
            const sliceFilter = [...filter.slice(0, index), ...filter.slice(index + 1)]
            if (sliceFilter.length === 0) {
                setFilter([])
                setProductList(fullProductList)
            } else {
                
                setFilter(sliceFilter)
                setProductList(fullProductList)
                
            }
        } else {
            console.log(fullProductList)
            const addFilter = [...filter, singleFilter]
            setFilter(addFilter)
            setProductList(fullProductList)
        }
        
    }

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);

        getAllProductsByCategory(offset, 3, category)
            .then(onProductListLoaded)
    }

    const onProductListLoaded = (newProductList) => {
        let ended = false;
        if (newProductList.length < 3) {
            ended = true;
        }
        const brand = renderBrand(newProductList, filter)
    
        setProductList(productList => [...productList, ...brand]);
        setFullProductList(fullProductList => [...fullProductList, ...newProductList])
        setNewItemLoading(false);
        setOffset(offset => offset + 3);
        setProductEnded(ended);
    }

    function renderItems(arr) {
        
        const items =  arr.map((item, i) => { 
            return (
                <div key={item.id}>
                    <ProductCart id={item.id}/>
                </div>
            )
        });

        return (
            <>
                {items}
            </>
        )
    }
    
    function renderBrand(arr, brand) {
        if (brand.length === 0) {
            console.log(brand)
            return arr
        } else {
            let sortedList =[]
        
            brand.map(brandItem => {
                return arr.map(item => {
                    if (brandItem === item.brand) {
                        sortedList.push(item)
                    }
                })

        })
        return(sortedList)  
        }
    }

    const clearAll = () => {
        setFilter([])
        setProductList(fullProductList)
    }

    const items = renderItems(productList);
    return (
        <>
        <HeaderImage image={'/dryFood.png'} title={title} subtitle={subtitle}/>
        <div className='category-page-container'>
            <div className='category-page-column-1'>

                <div className='category-page-column-1-brand-filter'>
                    <BrandFilter clearAll={clearAll} updateFilter={updateFilter} category={category}/>

                </div>
            </div>
            <div className='category-page-column-2'>
                <div className='category-page-column-2-product-list'>
                    {items}
                </div>
                <div className='category-page-column-2-load-button'>
                    <button 
                        disabled={newItemLoading}
                        className='admin-page-button-submit'
                        style={{'display': productEnded ? 'none' : 'block'}}
                        onClick={() => onRequest(offset)}>
                        <div>Загрузить еще</div>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CategoryPage;