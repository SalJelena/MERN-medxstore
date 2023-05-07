import axios from "axios";

class ProductService {
    static getAllProducts = () => axios.get('/products/all')
    static getSingleProductDetails = (id) => axios.get(`/products/${id}`)
    static paginationProducts = (limit, page) => axios.get(`/products/${limit}/${page}`)



}

export default ProductService