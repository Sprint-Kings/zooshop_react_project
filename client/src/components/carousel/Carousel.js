import {useState, useEffect} from 'react';
import './carousel.css' //will be added later

const Carousel = (props) => {
    const {children} = props;

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
            setCurrentIndex(prevState => prevState + 1)

    }
    
    const prev = () => {
            setCurrentIndex(prevState => prevState - 1)

    }
// Set the length to match current children from props
    
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                }
                {
                    currentIndex < (length - 5) &&
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                }
            <div className="carousel-content-wrapper">
                
                <div
                    className="carousel-content"
                    style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
                    {children}
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Carousel