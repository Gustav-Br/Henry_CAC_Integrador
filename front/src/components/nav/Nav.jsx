import style from "./Nav.module.css";
import SearchBar from "../searchbar/SearchBar";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import PATHROUTES from "../helpers/PathRoutes.helpers";


const Nav = ({ onSearch }) => {
    const { pathname } = useLocation();
    const navegate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        navegate(PATHROUTES.LOGIN);
    };

    return (
        <div className={style.nav}>
            <div className={style.navLinks}>
                <NavLink to={PATHROUTES.ABOUT} className={({ isActive }) => (isActive ? style.active : "")}>About</NavLink>
                <NavLink to={PATHROUTES.HOME} className={({ isActive }) => (isActive ? style.active : "")}>Home</NavLink>
                <NavLink to={PATHROUTES.FAVORITES} className={({ isActive }) => (isActive ? style.active : "")}>Favorites</NavLink>

            </div>
            <SearchBar onSearch={onSearch} />
            {/* b{(pathname !== PATHROUTES.FAVORITES) && <SearchBar onSearch={onSearch} />} */}
            <div className={style.wrapBtn}>
                <spam>Helo: </spam>
                <button className={style.buttonClose} onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Nav;
