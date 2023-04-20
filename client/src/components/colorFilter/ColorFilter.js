import './colorFilter.css';

const ColorFilter = ({updateFilter}) => {

    return (
        <div className='color-filter-container'>
            <h3>Цвет</h3>
            <div className='color-filter-color-container'>
                <div onClick={() => updateFilter('Aвва')}>
                <span className='color-filter-circle' ></span>
                </div>
                <div onClick={() => updateFilter('Grandin')}>
                <span className='color-filter-circle' ></span>
                </div>
                <div onClick={() => updateFilter('Ownat')}>
                <span className='color-filter-circle' ></span>
                </div>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                <span className='color-filter-circle'></span>
                
            </div>
        </div>
    )
}

export default ColorFilter;