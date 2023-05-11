import axios from "axios";

class SearchService {
    static getSearchResults = (term) => axios.get(`/results?term=${term}`)
}

export default SearchService