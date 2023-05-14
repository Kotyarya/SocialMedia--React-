import {usersAPI} from "../../API/API";

const FOLLOW = "follow"
const UNFOLLOW = "unfollow"
const SET_USERS = "setUsers"
const SEARCH_USER_UPDATE_TEXT = "searchUserUpdateText"
const SHOW_MORE_USERS = "showMoreUsers"
const TOGGLE_IS_FETCHING = "toggleIsFetching"
const TOGGLE_IS_FOLLOW = "toggleIsFollow"


const initialState = {
    users: [],
    searchUserText: "",
    currentPage: 1,
    pageSize: 8,
    isFetching: false,
    isFollow: [],
}


const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.userId) {
                        item.followed = true
                    }
                    return item
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.userId) {
                        item.followed = false
                    }
                    return item
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SHOW_MORE_USERS:
            return {
                ...state,
                currentPage: state.currentPage + 1,
                users: [...state.users, ...action.users]
            }
        case SEARCH_USER_UPDATE_TEXT :
            return {
                ...state,
                currentPage: 1,
                searchUserText: action.text
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOW:
            if (action.isFollow) {
                return {
                    ...state,
                    isFollow: [...state.isFollow, action.id]
                }
            } else {
                return {
                    ...state,
                    isFollow: state.isFollow.filter(elem => elem !== action.id)
                }
            }
        default:
            return state
    }
}


export default usersReducer
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const showMoreUsers = (users) => ({type: SHOW_MORE_USERS, users})
export const searchUserUpdateText = (text) => ({type: SEARCH_USER_UPDATE_TEXT, text})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollow = (isFollow, id) => ({type: TOGGLE_IS_FOLLOW, isFollow, id})

export const getUsersThunkCreator = (pageSize) => (dispatch) => {
    dispatch(searchUserUpdateText(""))
    usersAPI.getUsers(1, pageSize)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(toggleIsFetching(false))
        })
}
export const showMoreUsersThunkCreator = (text, pageSize, pageUp) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.showMoreUsersWithText(pageUp, pageSize, text)
        .then(data => {
            dispatch(showMoreUsers(data.items))
            dispatch(toggleIsFetching(false))
        })
}

export const searchUserThunkCreator = (text, pageSize) => (dispatch) => {
    dispatch(searchUserUpdateText(text))
    dispatch(toggleIsFetching(true))
    usersAPI.showMoreUsersWithText(1, pageSize, text)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(toggleIsFetching(false))
        })
}

export const followThunkCreator = (id) => (dispatch) => {
    dispatch(toggleIsFollow(true, id))
    usersAPI.follow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(id))
                dispatch(toggleIsFollow(false, id))
            }
        })
}
export const unfollowThunkCreator = (id) => (dispatch) => {
    dispatch(toggleIsFollow(true, id))
    usersAPI.unfollow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(id))
                dispatch(toggleIsFollow(false, id))
            }
        })
}