import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const newMessageElement = React.createRef()

    let messagesElement = props.dialogsPage.messages.map(item => <Message id={`${item.id}`} key={`${item.id}`} message={item.message}/>)
    let dialogsElement = props.dialogsPage.dialogs.map(item => <DialogItem name={item.name} id={`${item.id}`} key={`${item.id}`} />)



    let onSendMessage = () => {
        if (newMessageElement.current.value === "") {
            return
        }
        newMessageElement.current.value = ""
        props.sendMessage()
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.messageChange(text)
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
