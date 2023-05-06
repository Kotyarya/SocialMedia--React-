import {sendMessageActionCreator} from "../../Redux/Reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "../../HOC/withRouter";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage : state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text))
        },
    }
}



const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(Dialogs)

export default DialogsContainer;
