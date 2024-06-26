import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img
                className={style.headerLogo}
                src="https://cdn-icons-png.flaticon.com/512/6988/6988878.png"
                alt="img"
            />

            {
                !props.isAuth
                ? <NavLink to="/login">Login</NavLink>
                : <button onClick={() => props.logoutUserThunkCreator()}>Logout</button>
            }
        </header>
    );
};
export default Header;
