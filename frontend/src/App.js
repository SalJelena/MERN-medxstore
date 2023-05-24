import {Outlet, ScrollRestoration} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import {BASE_URL_BE} from "./config/configVars";

axios.defaults.baseURL = axios.defaults.baseURL = BASE_URL_BE

function App() {
    return (
        <>
            <NavBar/>
            <ScrollRestoration/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default App;
