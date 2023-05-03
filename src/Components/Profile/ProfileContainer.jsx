import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "../../HOC/withRouter";
import {
    getStatusThunkCreator,
    setProfileThunkCreator,
    updateStatusThinkCreator
} from "../../Redux/Reducers/profileReducer";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        id: state.auth.id,
        status: state.profilePage.status
    }
}


class ProfileContainer extends React.PureComponent {

    componentDidMount() {
        debugger
        let userId = this.props.params.userId
        if (!userId) {
            userId = 28843
        }
        this.props.setProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile} isAuth={this.props.isAuth} status={this.props.status} updateStatus={this.props.updateStatusThinkCreator} />
        )
    }
}

export default compose(
    connect(mapStateToProps, {setProfileThunkCreator, getStatusThunkCreator,updateStatusThinkCreator}),
    withRouter
)(ProfileContainer)
