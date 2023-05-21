import {Link} from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
    return (
        <>
            <NavBar/>
            <div className="error">
                <div className="wrap">
                    <div className="error__inner">
                        <h2 className="error__title">Sorry, page not found.</h2>
                        <span className="error__number">404</span>
                        <Link to="/" className="button button--rounded button--secondary">Go to Home Page</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ErrorPage
