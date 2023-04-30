import { useState, useEffect } from 'react';

import './brandFilter.css';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import useZooService from '../../services/ZooService';

const BrandFilter = ({clearAll, updateFilter, category}) => {

    const [brands, setBrands] = useState([]);
    const [checboxs, setCheckboxs] = useState([]);
    const [arrow, setArrow] = useState(false);
    const [counter, setCounter] = useState(0);

    const {loading, error, clearError, getBrandByCategory} = useZooService();

    useEffect(() => {
        updateBrands();
    }, [])

    const updateBrands = () => {
        clearError();
        getBrandByCategory(category)
            .then(onBrandsLoaded);
    }

    const onBrandsLoaded = (brands) => {
        setCheckboxs(Array(brands.length).fill(false))
        setBrands(brands);
    }

    const updateCheckBoxs = (index) => {
        setCheckboxs(checboxs => checboxs.map((el, i) => {
            if (i === index) {
                !el ? setCounter(counter => counter + 1) : setCounter(counter => counter - 1)
                return !el
            }
            return el
        }))
    }



    const brandList = brands.map((item, index) => {
        return (
            <div className={checboxs[index] ? 'brand-filter-brand-element--selected' : 'brand-filter-brand-element'} 
                id={index} 
                onClick={() => {
                    updateFilter(item.brand)
                    updateCheckBoxs(index)
                }}>
                <h4>{item}</h4>
                <span className='brand-filter-custom-checkbox'></span>
            </div>
        )
    })

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !brands) ? brandList : null;
    const rotateArrow = arrow ? {transform: 'rotate(45deg)', left: '10%', top: '25%'} : null;
    const hideFilters = arrow ? {maxHeight: 0, padding: 0, overflow: 'hidden'} : {overflow: 'visible', display: 'block'};
    return (
        <>
        <div className='brand-filter-title' onClick={() => setArrow(arrow => !arrow)} style={arrow ? {borderRadius: '15px'} : null}>
            <div className='brand-filter-inner'>
            <h3>Бренд</h3>
            <span className='brand-filter-counter'>{counter}</span>
            </div>
            <div className='brand-filter-hide-icon-container'>
                <span className='brand-filter-hide-icon' style={rotateArrow}></span>
            </div>
        </div>
        <div className='brand-filter-body' style={hideFilters}>
            <div className='brand-filter-container'>
                <div className='brand-filter-brand-container'>
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </div>
        </div>
        <button className='brand-filter-clear-button' 
            onClick={() => {
                setCheckboxs(checkboxs => checboxs.fill(false))
                setCounter(0)
                clearAll()}}>Очистить все</button>
        </>
    )
}

export default BrandFilter;