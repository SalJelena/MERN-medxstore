import axios from "axios";

class ProductService {
    static getAllProducts = () => axios.get('/products/all')
    static getSingleProductDetails = (id) => axios.get(`/products/${id}`)
    static paginationProducts = (sort, limit, page) => axios.get(`/products/${sort}/${limit}/${page}`)
    static paginationByCategory = (category, limit, page) => axios.get(`/products/filtercategory?category=${category}&limit=${limit}&page=${page}`)
    static paginationByBrand = (brand, limit, page) => axios.get(`/products/filterbrand?brand=${brand}&limit=${limit}&page=${page}`)
    static getRandomProducts = (number) => axios.get(`/random/${number}`)

}

export default ProductService