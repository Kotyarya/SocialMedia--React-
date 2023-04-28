import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUser} from "../../Redux/Reducers/authReducer";
import React from "react";
import {HeaderAPI} from "../../API/API";

class HeaderContainer extends React.Component {
    componentDidMount() {
        HeaderAPI.authAPI().then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUser(data)
                }
            })
    }


    render() {
        return <Header {...this.props} />
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{setAuthUser})(HeaderContainer)