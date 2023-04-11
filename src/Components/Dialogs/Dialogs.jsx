import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <NavLink
      to={props.id}
      className={({ isActive }) =>
        isActive ? `${style.item} ${style.itemActive}` : `${style.item}`
      }
    >
      {props.name}
    </NavLink>
  );
};

const Message = (props) => {
  return <div>{props.message}</div>;
};

const Dialogs = () => {
  let dialogData = [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
    { id: 4, name: "User4" },
    { id: 5, name: "User5" },
    { id: 6, name: "User6" },
  ];

  let messageData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "Hey" },
    { id: 4, message: "Yo" },
    { id: 5, message: "GG" },
    { id: 6, message: "PRIVET BLYAT" },
  ];
  return (
    <div className={style.dialogs}>
      <div className={style.users}>
        <DialogItem name={dialogData[0].name} id={`${dialogData[0].id}`} />
        <DialogItem name={dialogData[1].name} id={`${dialogData[1].id}`} />
        <DialogItem name="User3" id="3" />
        <DialogItem name="User4" id="4" />
        <DialogItem name="User5" id="5" />
        <DialogItem name="User6" id="6" />
      </div>
      <div className={style.dialog}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
        <Message message={messageData[3].message} />
        <Message message={messageData[4].message} />
        <Message message={messageData[5].message} />
      </div>
    </div>
  );
};

export default Dialogs;
