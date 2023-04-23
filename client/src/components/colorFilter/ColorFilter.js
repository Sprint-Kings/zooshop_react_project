import './colorFilter.css';

const ColorFilter = ({updateFilter}) => {
    return (
        
        <div className='color-filter-container'>
            <h3>Цвета</h3>
            <div className='color-filter-color-container'>
                <div onClick={() => updateFilter('Авва')} className='color-filter-circle'>
                <div className='color-filter-checker'></div>
                </div>
                
                <div onClick={() => updateFilter('Grandin')} className='color-filter-circle'></div>
                <div onClick={() => updateFilter('Ownat')} className='color-filter-circle' ></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                <div className='color-filter-circle'></div>
                
            </div>
        </div>
    )
}

const View = () => {
    
}
export default ColorFilter;