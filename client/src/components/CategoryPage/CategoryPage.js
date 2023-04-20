import {useState, useEffect} from 'react';

import './categoryPage.css'

import ColorFilter from "../colorFilter/ColorFilter";
import ProductCart from '../productCart/ProductCart';
import useZooService from '../../services/ZooService';

const CategoryPage = () => {

    const [fullProductList, setFullProductList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(1);
    const [productEnded, setProductEnded] = useState(false);
    const [filter, setFilter] = useState([]);

    const {getAllProducts} = useZooService();

    useEffect(() => {
        onRequest(offset, true);
        setFullProductList(productList);
    }, [])

    useEffect(() => {
        const p = renderBrand(productList, filter);
        console.log(p)
        setProductList(p)
    }, [filter])

    const updateFilter = (singleFilter) => {
        const index = filter.indexOf(singleFilter)
        if (index !== -1) {
            const sliceFilter = [...filter.slice(0, index), ...filter.slice(index + 1)]
            if (sliceFilter.length === 0) {
                setFilter([])

            } else {
                
                setFilter(sliceFilter)
                setProductList(fullProductList)
                
            }
        } else {
            console.log(fullProductList)
            console.log('hier')
            const addFilter = [...filter, singleFilter]
            
            setFilter(addFilter)

            setProductList(fullProductList)

            
            
           
        }
        
    }

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
            console.log('return')
            console.log(arr)
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

    const items = renderItems(productList);
    return (
        <div className='category-page-container'>
            <div className='category-page-column-1'>
                <ColorFilter updateFilter={updateFilter}/>
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
                onClick={() => setFilter(['Grandin','Ownat'])}>
                <div>change</div>
            </button>
        </div>
    )
}

export default CategoryPage;