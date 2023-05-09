import axios from "axios";

class BrandsService {
    static getAllBrands = () => axios.get('/brands/all')
}

export default BrandsService