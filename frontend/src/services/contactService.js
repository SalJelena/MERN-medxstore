import axios from "axios";

class ContactService {
    static sendContactMessage = (body) => axios.post("/contact", body)
}

export default ContactService