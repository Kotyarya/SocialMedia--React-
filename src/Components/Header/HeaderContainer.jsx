import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setAuthUser} from "../../Redux/Reducers/authReducer";
import React from "react";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUser(response.data)
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