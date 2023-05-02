import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {withRouter} from "../../HOC/withRouter";


let mapStateToProps = (state) => {
    return {
        dialogsPage : state.dialogsPage,
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



const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(Dialogs)

export default DialogsContainer;
