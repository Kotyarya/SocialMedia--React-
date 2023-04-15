import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Reducers/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let messageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

  return <Dialogs onSendMessage={sendMessage} onMessageChange={messageChange} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>
};

export default DialogsContainer;
