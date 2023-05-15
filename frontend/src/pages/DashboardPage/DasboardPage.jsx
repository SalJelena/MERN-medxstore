import React from 'react'
import {NavLink, Outlet} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import {dashboardSidebarItem} from "../../router/routes";

const DashboardPage = () => {

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
