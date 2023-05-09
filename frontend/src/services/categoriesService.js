import axios from "axios";

class CategoriesService {
    static getAllCategories = () => axios.get('/categories/all')

}
 
export default CategoriesService