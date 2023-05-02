import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "../../HOC/withRouter";
import {setProfileThunkCreator} from "../../Redux/Reducers/profileReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
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

export default compose(
    connect(mapStateToProps, {setProfileThunkCreator}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
