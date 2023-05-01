import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../Redux/Reducers/profileReducer";
import {withRouter} from "../common/withRouter";
import {profileAPI} from "../../API/API";


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth : state.profilePage.authProfile.isAuth,
        id: state.profilePage.authProfile.id
    }
}


class ProfileContainer extends React.PureComponent {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
                userId = this.props.id
        }
        
            profileAPI.setProfile(userId)
                .then(response => {
                    this.props.setProfile(response)
                })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

withRouter(ProfileContainer)
export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer))
