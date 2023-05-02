import {connect} from "react-redux";
import Header from "./Header";
import React from "react";
import {setAuthUserThunkCreator} from "../../Redux/Reducers/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.setAuthUserThunkCreator()
    }


    render() {
        return <Header {...this.props} />
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{setAuthUserThunkCreator})(HeaderContainer)