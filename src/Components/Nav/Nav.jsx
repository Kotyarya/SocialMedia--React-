import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <NavLink to='/profile' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>Profile</NavLink>
            <NavLink to='/dialogs' className={style.item}>Messages</NavLink>
            <p className={style.item}>News</p>
            <p className={style.item}>Music</p>
            <p className={style.item}>Settings</p>
        </nav>
    );
};
export default Nav;
