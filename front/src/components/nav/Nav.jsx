import style from "./Nav.module.css";
import SearchBar from "../searchbar/SearchBar";
import {Link} from 'react-router-dom';


const Nav = ({onSearch}) => {        
    
    return(
        <div className={style.nav}>
            <div className={style.navLinks}>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
            </div>
            <SearchBar onSearch={onSearch} />
        </div>
    );
};

export default Nav;
