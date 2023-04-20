const follow = "follow"
const unfollow = "unfollow"
const setUsers = "setUsers"


const initialState = {
    users: [
        { id: 1, fullName:"User1", followed: false, status : "Status1", location: {city : "City1" , country : "Country1"}},
        { id: 2, fullName:"User2", followed: true, status : "Status2", location: {city : "City2" , country : "Country2"}},
        { id: 3, fullName:"User3", followed: false, status : "Status3", location: {city : "City3" , country : "Country3"}},
        { id: 4, fullName:"User4", followed: true, status : "Status4", location: {city : "City4" , country : "Country4"}},
        { id: 5, fullName:"User5", followed: true, status : "Status5", location: {city : "City5" , country : "Country5"}},
        { id: 6, fullName:"User6", followed: false, status : "Status6", location: {city : "City6" , country : "Country6"}},
        { id: 7, fullName:"User7", followed: true, status : "Status7", location: {city : "City7" , country : "Country7"}},
        { id: 8, fullName:"User8", followed: false, status : "Status8", location: {city : "City8" , country : "Country8"}},
        { id: 9, fullName:"User9", followed: true, status : "Status9", location: {city : "City9" , country : "Country9"}},
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
            stateCopy.users = [stateCopy.users, ...action.users]
            return stateCopy
        default:
            return state
    }

}




export  default usersReducer
export const followAC = (userId) => ({type : follow, userId})
export const unfollowAC = (userId) => ({type : unfollow, userId})
export const setUsersAC = (users) => ({type : setUsers, users})