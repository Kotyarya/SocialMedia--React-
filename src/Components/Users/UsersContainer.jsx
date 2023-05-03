import {connect} from "react-redux";
import {
    follow,
    followThunkCreator,
    getUsersThunkCreator,
    searchUserThunkCreator,
    searchUserUpdateText,
    setUsers,
    showMoreUsers,
    showMoreUsersThunkCreator,
    toggleIsFetching,
    toggleIsFollow,
    unfollow,
    unfollowThunkCreator
} from "../../Redux/Reducers/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        searchUserText : state.usersPage.searchUserText,
        currentPage : state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        isFollow: state.usersPage.isFollow,
        isAuth: state.auth.isAuth
    }
}

const dispatchToProps = {
    follow,
    unfollow,
    setUsers,
    showMoreUsers,
    searchUserUpdateText,
    toggleIsFetching,
    toggleIsFollow,
    getUsersThunkCreator,
    showMoreUsersThunkCreator,
    searchUserThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
}

class UsersContainer extends React.PureComponent {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageSize)
    }

    showMoreUsers = (text) => {
        let pageUp = this.props.currentPage + 1
        this.props.showMoreUsersThunkCreator(text,this.props.pageSize,pageUp)
    }

    searchUser = (text) => {
       this.props.searchUserThunkCreator(text,this.props.pageSize)
        if (text === "") {
            this.componentDidMount()
        }
    }

    follow = (id) => {
        this.props.followThunkCreator(id)
    }

    unfollow = (id) => {
       this.props.unfollowThunkCreator(id)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    searchUserText={this.props.searchUserText}
                    users={this.props.users}
                    follow={this.follow}
                    unfollow={this.unfollow}
                    searchUser={this.searchUser}
                    showMoreUsers={this.showMoreUsers}
                    toggleIsFollow={this.props.toggleIsFollow}
                    isFetching={this.props.isFetching}
                    isFollow={this.props.isFollow}
                    isAuth={this.props.isAuth}
                />
            </>
        )
    }
}


export default connect(mapStateToProps,dispatchToProps)(UsersContainer)

