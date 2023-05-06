import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogsForm from "./DialogsForm";

const Dialogs = (props) => {

    let messagesElement = props.dialogsPage.messages.map(item => <Message id={`${item.id}`} key={`${item.id}`} message={item.message}/>)
    let dialogsElement = props.dialogsPage.dialogs.map(item => <DialogItem name={item.name} id={`${item.id}`} key={`${item.id}`} />)


    const submit = (value) => {
        if (value.MessageText === "") {
            return
        }
        props.sendMessage(value.MessageText)
        value.MessageText = ""
    }


    return (
    <div className={style.dialogs}>
      <div className={style.users}>
        {dialogsElement}
      </div>
      <div className={style.dialog}>
          <div>{messagesElement}</div>
          <DialogsForm onSubmit={submit}/>
      </div>
    </div>
  );
};




export default Dialogs;
