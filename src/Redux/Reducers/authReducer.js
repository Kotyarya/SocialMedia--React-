const SET_AUTH_USER = "SET_AUTH_USER"

const initialState = {
    login: null,
    userId : null,
    email : null,
    isAuth : false
}


const authReducer = (state = initialState,action) => {

    let stateCopy = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case SET_AUTH_USER:
            stateCopy = {
                ...action.data.data,
                isAuth : true
            }
            return stateCopy;
        default:
            return state
    }

}




export  default authReducer
export const setAuthUser = (data) => ({type : SET_AUTH_USER, data})
