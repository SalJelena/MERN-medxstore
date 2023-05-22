import React from 'react'
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import {dashboardSidebarItem, routes} from "../../router/routes";
import {logoutUser} from "../../store/usersSlice";
import {clearCart} from "../../store/cartSlice";
import {LS_TOKEN} from "../../config/configVars";
import {useDispatch} from "react-redux";

const DashboardPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUser())
        dispatch(clearCart())
        localStorage.removeItem(LS_TOKEN)
        navigate(routes.AUTH.path)
    }

    const renderedSidebarItems = () => {
        return dashboardSidebarItem.map((item, index) => {
            return <li key={index} className="dashboard__sidebar-item">
                <NavLink className="dashboard__sidebar-link"
                         to={item.path} end={true}>{item.name}</NavLink>
            </li>
        })
    }

    return (
        <>
            <NavBar/>
            <div className="dashboard">
                <div className="wrap">
                    <div className="dashboard__inner">
                        <div className="dashboard__sidebar">
                            <ul className="dashboard__sidebar-list">
                                {renderedSidebarItems()}
                                <li className="dashboard__sidebar-item">
                                    <button type="button"
                                            className="button button--primary dashboard__sidebar-logout"
                                            onClick={handleLogout}>Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="dashboard__content">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default DashboardPage
