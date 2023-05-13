import React, {useState} from 'react'
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Heading from "../../components/Heading/Heading";
import bgImage from "../../assets/images/06.jpg"

const AuthPage = () => {
    const [selectedTab, setSelectedTab] = useState("login")

    return (
        <div className="auth">
            <Heading bgImage={bgImage}/>
            <div className="wrap">
                <div className="auth__container">
                    <div className="auth__inner">

                        <div className="auth__navigation">
                            <button
                                className={`auth__btn ${selectedTab === "login" ? "auth__btn--active" : ""}`}
                                onClick={() => setSelectedTab("login")}
                            >
                                Login
                            </button>
                            <button
                                className={`auth__btn ${selectedTab === "register" ? "auth__btn--active" : ""}`}
                                onClick={() => setSelectedTab("register")}
                            >
                                Register
                            </button>
                        </div>

                        <div className="auth__content">
                            {
                                selectedTab === "login" ?
                                    <>
                                        <Login/>
                                    </>
                                    :
                                    <>
                                        <Register setSelectedTab={setSelectedTab}/>
                                    </>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default AuthPage
