import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";

const Dialogs = (props) => {

    const newMessageElement = React.createRef()

    let messagesElement = props.dialogPage.messages.map(item => <Message id={`${item.id}`} key={`${item.id}`} message={item.message}/>)
    let dialogsElement = props.dialogPage.dialogs.map(item => <DialogItem name={item.name} id={`${item.id}`} key={`${item.id}`} />)
    let onSendMessage = () => {
        newMessageElement.current.value = ""
        props.dispacth(sendMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispacth(updateNewMessageTextActionCreator(text))
    }

  return (
    <div className={style.dialogs}>
      <div className={style.users}>
        {dialogsElement}
      </div>
      <div className={style.dialog}>
          <div>{messagesElement}</div>
          <div><textarea ref={newMessageElement} onChange={onMessageChange} placeholder={"Write Message"}></textarea></div>
          <div><button onClick={onSendMessage}>Send</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
