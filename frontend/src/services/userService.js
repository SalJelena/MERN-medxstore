import axios from "axios";

class UserService {
    static registerUser = (body) => axios.post("/user/register", body)
    static activateAccount = (id) => axios.put("/user/activate/" + id)
    static loginUser = (body) => axios.post("/user/login", body)
    static addToFavorite = (body) => axios.put("/user/addToFavorite", body)
    static removeFromFavorite = (body) => axios.put("user/removeFromFavorite", body)
}

export default UserService