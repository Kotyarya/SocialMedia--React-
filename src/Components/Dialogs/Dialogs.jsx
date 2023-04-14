import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {



  return (
    <div className={style.dialogs}>
      <div className={style.users}>
        {props.state.dialogs.map(item =>
          <DialogItem name={item.name} id={`${item.id}`} />
        )}
      </div>
      <div className={style.dialog}>
      {props.state.messages.map(item => <Message message={item.message} />)}
      </div>
    </div>
  );
};

export default Dialogs;
