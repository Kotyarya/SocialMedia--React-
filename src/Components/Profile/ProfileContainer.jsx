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
import {withAuthProfileRedirect} from "../../HOC/withAuthProfileRedirect";


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        id: state.auth.id,
        status: state.profilePage.status
    }
}


class ProfileContainer extends React.PureComponent {

    userId = this.props.params.userId ? this.props.params.userId : this.props.id

    componentDidMount() {
        if (this.userId !== null) {
            this.props.setProfileThunkCreator(this.userId)
            this.props.getStatusThunkCreator(this.userId)
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        let prevPar = prevProps.params.userId
        let propsPar = this.props.params.userId
        if ((prevProps.id !== this.props.id) || (prevPar !== propsPar)) {
            this.props.setProfileThunkCreator(this.props.id)
            this.props.getStatusThunkCreator(this.props.id)
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile} isAuth={this.props.isAuth} status={this.props.status} updateStatus={this.props.updateStatusThinkCreator} />
        )
    }
}

export default compose(
    connect(mapStateToProps, {setProfileThunkCreator, getStatusThunkCreator,updateStatusThinkCreator}),
    withRouter,
    withAuthProfileRedirect
)(ProfileContainer)
