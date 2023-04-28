import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../Redux/Reducers/profileReducer";
import {withRouter} from "../common/withRouter";
import {profileAPI} from "../../API/API";


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth : state.auth.isAuth,
        id: state.auth.id

    }
}


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
            if (this.props.isAuth) {
                userId = this.props.id
            }
        }
        profileAPI.setProfile()
            .then(response => {
                this.props.setProfile(response.data)
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
