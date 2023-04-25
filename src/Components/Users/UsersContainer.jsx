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
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";


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
        this.getUsers(1,'',this.props.setUsers)

    }

    getUsers = (page,term,callBackFunc) => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}&term=${term}`)
            .then(response => {
                callBackFunc(response.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    showMoreUsers = (text) => {
        let pageUp = this.props.currentPage + 1
        this.getUsers(pageUp,text,this.props.showMoreUsers)
    }

    searchUser = (text) => {
        this.props.searchUserUpdateText(text)
        this.getUsers(1,text,this.props.setUsers)
        if (text === "") {
            this.componentDidMount()
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    searchUserText={this.props.searchUserText}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    searchUser={this.searchUser}
                    showMoreUsers={this.showMoreUsers}
                />
            </>
        )
    }
}


export default connect(mapStateToProps,dispatchToProps)(UsersContainer)

