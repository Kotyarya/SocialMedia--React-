import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    searchUserUpdateTextAC,
    setUsersAC,
    showMoreUsersAc,
    unfollowAC
} from "../../Redux/Reducers/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        searchUserText : state.usersPage.searchUserText
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

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer;

