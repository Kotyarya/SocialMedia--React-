import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage : state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        messageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))

        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogsContainer;
