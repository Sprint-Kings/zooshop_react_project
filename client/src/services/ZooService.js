import { useHttp } from "../hooks/http.hook";

const useZooService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'http://localhost:8083/api/';
    const _baseOffset = 1;
    const _baseLimit = 3;
    
    const getAllProducts = async (offset = _baseOffset, limit = _baseLimit) => {
        const res = await request(`${_apiBase}products/${limit}/${offset}`);
        return res.map(_transformProduct)
    }   

    const getAllProductsByCategory = async (offset = _baseOffset, limit = _baseLimit, category) => {
        const res = await request(`${_apiBase}products/${category}/${limit}/${offset}`);
        return res.map(_transformProduct)
    }  

    const getProduct = async (id) => {
        const res = await request(`${_apiBase}product/${id}`);
        return _transformProduct(res[0])
    }

    const _transformProduct = (product) => {
        return {
            id: product.product_id,
            name: product.name,
            description: product.description ? `${product.description.slice(0, 210)}...` : 'There is no description for this product',
            thumbnail: product.thumbnail,
            color: product.color,
            brand: product.brand,
            in_stock: product.in_stock,
            category: product.category,
            price: [
                product.price_small,
                product.price_medium,
                product.price_large,
            ],
            weight: [
                product.weight_small,
                product.weight_medium,
                product.weight_large
            ],
            
        }
    }

    const getAllNews = async (offset = _baseOffset, limit = _baseLimit) => {
        const res = await request(`${_apiBase}news/${limit}/${offset}`);
        return res.map(_transformNews)
    }   

    const getNews = async (id) => {
        const res = await request(`${_apiBase}news/${id}`);
        return _transformNews(res[0])
    }

    const _transformNews = (news) => {
        return {
            id: news.news_id,
            title: news.title,
            description: news.description,
            author: news.author,
            data: news.data,
            thumbnail: news.thumbnail,
        }
    }

    const getBrandByCategory = async (category) => {
        const res = await request(`${_apiBase}brands/${category}`);
        return res
    }  

    const getAllCategories = async () => {
        const res = await request(`${_apiBase}categories`);
        return res
    }  

    return {loading, error, getAllProducts, getProduct, 
        getAllNews, getNews, getBrandByCategory, 
        getAllProductsByCategory, getAllCategories, 
        clearError}
}

export default useZooService;