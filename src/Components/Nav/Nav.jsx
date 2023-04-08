import style from "./Nav.module.css"

let Nav = () => {
    return (
        <nav className={style.nav}>
            <p className={style.item}>Profile</p>
            <p className={style.item}>Messages</p>
            <p className={style.item}>News</p>
            <p className={style.item}>Music</p>
            <p className={style.item}>Settings</p>
        </nav>
    );
};
export default Nav;
