
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useZooService from '../../services/ZooService';

const ProductPage = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState(null);

    const {loading, error, getProduct, clearError} = useZooService();
    
    useEffect(() => {
        updateProduct()
    }, [productId])

    const updateProduct = () => {
        clearError();
        getProduct(productId)
            .then(onProductLoaded)
        
    }

    const onProductLoaded = (product) => {
        setProduct(product);
    }
    console.log(product)
    const errorMessage = error ? <p>Error</p> : null;
    const spinner = loading ? <p>spiner</p> : null;
    const content = !(loading || error || !product) ? <View product={product}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({product}) => {
    const {thumbnail, name, description, color, category} = product;

    return (
        <ul>
            <li>
                <img src={thumbnail} alt={name}/>
                <p>{name}</p>
                <p>{description}</p>
                <p>{color}</p>
                <p>{category}</p>
            </li>
        </ul>
    )
}

export default ProductPage;