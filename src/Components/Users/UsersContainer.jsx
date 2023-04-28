import {connect} from "react-redux";
import {
    follow,
    searchUserUpdateText,
    setUsers,
    showMoreUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/Reducers/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../API/API";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        searchUserText : state.usersPage.searchUserText,
        currentPage : state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
    }
}


const dispatchToProps = {
    follow,
    unfollow,
    setUsers,
    showMoreUsers,
    searchUserUpdateText,
    toggleIsFetching
}

class UsersContainer extends React.PureComponent {

    componentDidMount() {
        this.props.searchUserUpdateText("")
        usersAPI.getUsers(1,this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })

    }

    showMoreUsers = (text) => {
        let pageUp = this.props.currentPage + 1
        usersAPI.showMoreUsersWithText(pageUp,this.props.pageSize,text)
            .then(data => {
                this.props.showMoreUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    searchUser = (text) => {
        this.props.searchUserUpdateText(text)
        usersAPI.showMoreUsersWithText(1,this.props.pageSize,text)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
        if (text === "") {
            this.componentDidMount()
        }
    }

    followAPI = (id) => {
        return usersAPI.follow(id)
    }
    unfollowAPI = (id) => {
        return usersAPI.unfollow(id)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    searchUserText={this.props.searchUserText}
                    users={this.props.users}
                    follow={this.props.follow}
                    followAPI={this.followAPI}
                    unfollowAPI={this.unfollowAPI}
                    unfollow={this.props.unfollow}
                    searchUser={this.searchUser}
                    showMoreUsers={this.showMoreUsers}

                />
            </>
        )
    }
}


export default connect(mapStateToProps,dispatchToProps)(UsersContainer)

