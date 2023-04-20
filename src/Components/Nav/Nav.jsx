import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <NavLink to='/profile' className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.item}`
            }>Profile</NavLink>
            <NavLink to='/dialogs' className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.item}`
            }>Messages</NavLink>
            <NavLink to='/users' className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.item}`
            }>Users</NavLink>
            <p className={style.item}>News</p>
            <p className={style.item}>Music</p>
            <p className={style.item}>Settings</p>
        </nav>
    );
};
export default Nav;
