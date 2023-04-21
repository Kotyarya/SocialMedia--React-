const follow = "follow"
const unfollow = "unfollow"
const setUsers = "setUsers"


const initialState = {
    users: [
    ]
}


const usersReducer = (state = initialState,action) => {
    let stateCopy = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case follow:
            stateCopy.users.forEach(item => {
                if (item.id === action.userId) {
                    item.followed = true
                }
            })
            return stateCopy
        case unfollow:
            stateCopy.users.forEach(item => {
                if (item.id === action.userId) {
                    item.followed = false
                }
            })
            return stateCopy
        case setUsers:
            stateCopy.users = [...action.users]
            return stateCopy
        default:
            return state
    }

}




export  default usersReducer
export const followAC = (userId) => ({type : follow, userId})
export const unfollowAC = (userId) => ({type : unfollow, userId})
export const setUsersAC = (users) => ({type : setUsers, users})