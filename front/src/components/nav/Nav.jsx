import style from "./Nav.module.css";
import SearchBar from "../searchbar/SearchBar";
import { NavLink } from 'react-router-dom';


const Nav = ({ onSearch }) => {

    return (
        <div className={style.nav}>
            <div className={style.navLinks}>
                <NavLink to='/about' className={({ isActive }) => (isActive ? style.active : "")}>About</NavLink>
                <NavLink to='/home' className={({ isActive }) => (isActive ? style.active : "")}>Home</NavLink>
                <NavLink to='/favorites' className={({ isActive }) => (isActive ? style.active : "")}>Favorites</NavLink>
            </div>
            <SearchBar onSearch={onSearch} />
        </div>
    );
};

export default Nav;
