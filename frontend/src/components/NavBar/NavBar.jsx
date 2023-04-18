import { mainNavbarItem } from "../../router/routes"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
        <div>
            <Link to="/">LOGO</Link>
            <div>
                <ul>
                    {mainNavbarItem.map((item, index) => {
                        return <li key={index}>
                            <NavLink to={item.path}>{item.name}</NavLink>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar