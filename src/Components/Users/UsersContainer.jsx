import {connect} from "react-redux";
import {
    followAC,
    searchUserUpdateTextAC,
    setUsersAC,
    showMoreUsersAc,
    unfollowAC
} from "../../Redux/Reducers/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        searchUserText : state.usersPage.searchUserText,
        pageCount : state.usersPage.pageCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        showMoreUsers: (users) => {
            dispatch(showMoreUsersAc(users))
        },
        searchUserUpdateText: (text) => {
            dispatch(searchUserUpdateTextAC(text))
        },
    }
}


class UsersContainer extends React.PureComponent {

    componentDidMount() {
        this.props.searchUserUpdateText("")
        this.getUsers(1,'',this.props.setUsers)

    }

    getUsers = (page,term,callBackFunc) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=8&term=${term}`)
            .then(response => {
                callBackFunc(response.data.items)
            })
    }

    showMoreUsers = (text) => {
        let pageUp = this.props.pageCount + 1
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
        return (<Users
            searchUser={this.searchUser}
            searchUserText={this.props.searchUserText}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            showMoreUsers={this.showMoreUsers}
        />)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)

