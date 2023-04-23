//import image from '../../img/.main_image.jpg';
import './header-image.css';

import { Link } from 'react-router-dom';

function HeaderImage({image, btn=false, title, subtitle=false}) {
    return (
        <div className='container-header-image' style={{backgroundImage: `url(${image})`}}>
            <div className='header-title' >
                <h1>{title}</h1>
                {subtitle ? <h2>{subtitle}</h2>: null}
            </div>

            {btn ? <div className='btn-container'>
                    <Link to='/categories' style={{ textDecoration: 'none', color: 'black'}}>
                        <button className='btn'>За покупками</button>
                    </Link>
                </div> : null}
        </div>
    );
}
export default HeaderImage;