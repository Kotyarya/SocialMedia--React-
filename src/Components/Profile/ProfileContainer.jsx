import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "../common/withRouter";
import {setProfileThunkCreator} from "../../Redux/Reducers/profileReducer";


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth : state.auth.isAuth,
        id: state.auth.id
    }
}


class ProfileContainer extends React.PureComponent {

    componentDidMount() {


        let userId = this.props.params.userId
        if (!userId) {
            userId = this.props.id
        }

        if (userId !== null) {
            this.props.setProfileThunkCreator(userId)
        }


    }

    render() {

        return (
            <Profile profile={this.props.profile} isAuth={this.props.isAuth}/>
        )
    }
}

withRouter(ProfileContainer)
export default connect(mapStateToProps, {setProfileThunkCreator})(withRouter(ProfileContainer))
