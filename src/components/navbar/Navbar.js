import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";
    return ( 
        <nav className="nav">
            <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                    <strong>Freelancer</strong> portfolio
                </NavLink>

                <BtnDarkMode/>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Главная
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/projects" 
                            className={({isActive}) => isActive ? activeLink : normalLink}>
                                Проекты
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/petProjects" 
                            className={({isActive}) => isActive ? activeLink : normalLink}>
                                Пет-проекты
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/contacts" 
                            className="nav-list__link">
                                Контакты
                        </NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
     );
}
 
export default Navbar;