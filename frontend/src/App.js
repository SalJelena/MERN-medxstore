import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import axios from "axios";

axios.defaults.baseURL = axios.defaults.baseURL = BASE_URL_BE

function App() {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default App;
