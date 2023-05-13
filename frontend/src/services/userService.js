import axios from "axios";

class UserService {
    static registerUser = (body) => axios.post("/user/register", body)
    static activateAccount = (id) => axios.put("/user/activate/" + id)
    static loginUser = (body) => axios.post("/user/login", body)
}

export default UserService