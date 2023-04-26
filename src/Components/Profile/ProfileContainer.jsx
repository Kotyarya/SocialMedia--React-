import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../Redux/Reducers/profileReducer";


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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


export default connect(mapStateToProps,{setProfile})(ProfileContainer)
