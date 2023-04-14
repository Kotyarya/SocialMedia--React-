import {NavLink} from "react-router-dom";
import style from "../Dialogs.module.css";

const DialogItem = (props) => {
    return (
        <NavLink
            to={props.id}
            className={({ isActive }) =>
                isActive ? `${style.item} ${style.itemActive}` : `${style.item}`
            }>
            {props.name}
        </NavLink>
    );
};


export default DialogItem