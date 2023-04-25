const FOLLOW = "follow"
const UNFOLLOW = "unfollow"
const SET_USERS = "setUsers"
const SEARCH_USER_UPDATE_TEXT = "searchUserUpdateText"
const SHOW_MORE_USERS = "showMoreUsers"
const TOGGLE_IS_FETCHING = 'toggleIsFetching'


const initialState = {
    users: [],
    searchUserText : "",
    currentPage: 1,
    pageSize: 8,
    isFetching: false
}


const usersReducer = (state = initialState,action) => {

    let stateCopy = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case FOLLOW:
            stateCopy.users.forEach(item => {
                if (item.id === action.userId) {
                    item.followed = true
                }
            })
            return stateCopy
        case UNFOLLOW:
            stateCopy.users.forEach(item => {
                if (item.id === action.userId) {
                    item.followed = false
                }
            })
            return stateCopy
        case SET_USERS:
           stateCopy.users = [...action.users]
            return stateCopy
        case SHOW_MORE_USERS:
            stateCopy.currentPage++
            stateCopy.users = [...stateCopy.users, ...action.users]
            return stateCopy
        case SEARCH_USER_UPDATE_TEXT :
            stateCopy.currentPage = 1
            stateCopy.searchUserText = action.text
            return stateCopy
        case TOGGLE_IS_FETCHING:
            stateCopy.isFetching = action.isFetching
            return stateCopy
        default:
            return state
    }
}




export  default usersReducer
export const follow = (userId) => ({type : FOLLOW, userId})
export const unfollow = (userId) => ({type : UNFOLLOW, userId})
export const setUsers = (users) => ({type : SET_USERS, users})
export const showMoreUsers = (users) => ({type : SHOW_MORE_USERS, users})
export const searchUserUpdateText = (text) => ({type : SEARCH_USER_UPDATE_TEXT, text})
export const toggleIsFetching = (isFetching) => ({type : TOGGLE_IS_FETCHING, isFetching})