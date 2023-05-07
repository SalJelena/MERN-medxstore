import axios from "axios";

class ProductService {
    static getAllProducts = () => axios.get('/products/all')
    static paginationProducts = (limit, page) => axios.get(`/products/${limit}/${page}`)
    // static getProductDetails = (id) => axios.get(`/products/${id}`)

}

export default ProductService