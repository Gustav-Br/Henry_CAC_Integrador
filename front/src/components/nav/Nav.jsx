import style from "./Nav.module.css";
import SearchBar from "../searchbar/SearchBar";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import PATHROUTES from "../helpers/PathRoutes.helpers";


const Nav = ({ onSearch }) => {
    const { pathname } = useLocation();
    const navegate = useNavigate();
    const user = (localStorage.getItem("user"));


    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navegate(PATHROUTES.LOGIN);
    };

    return (
        <div className={style.nav}>
            <div className={style.navLinks}>
                <NavLink to={PATHROUTES.LOGIN} className={({ isActive }) => (isActive ? style.active : "")}>Login</NavLink>
                <NavLink to={PATHROUTES.HOME} className={({ isActive }) => (isActive ? style.active : "")}>Home</NavLink>
                <NavLink to={PATHROUTES.FAVORITES} className={({ isActive }) => (isActive ? style.active : "")}>Favorites</NavLink>

            </div>
            <SearchBar onSearch={onSearch} />
            {/* b{(pathname !== PATHROUTES.FAVORITES) && <SearchBar onSearch={onSearch} />} */}
            {(user) &&
                <div className={style.wrapBtn}>
                    <p className={style.heloUser}>Helo: {user}</p>
                    <button className={style.btnLogout} onClick={handleLogout}>Logout</button>
                </div>}
        </div>
    );
};

export default Nav;
