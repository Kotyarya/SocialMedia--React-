import {AuthAPI} from "../../API/API";

const SET_AUTH_USER = "SET_AUTH_USER"
const LOGIN_USER = "LOGIN_USER"

const initialState = {
    login: null,
    id : null,
    email : null,
    isAuth : false
}

const authReducer = (state = initialState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state))


    switch (action.type) {
        case SET_AUTH_USER:
            stateCopy = {
                ...action.data.data,
                isAuth : true
            }
            return stateCopy;
        case LOGIN_USER:
            stateCopy.id = action.userId
            stateCopy.isAuth = true
            return stateCopy
        default:
            return state
    }
}

export default authReducer
export const setAuthUser = (data) => ({type : SET_AUTH_USER, data})
export const loginUser = (userId) => ({type: LOGIN_USER, userId})


export const setAuthUserThunkCreator = () => (dispatch) => {
    AuthAPI.authMeAPI()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUser(data))
            }
        })
}

export const loginUserThunkCreator = (email,password,rememberMe) => (dispatch) => {
    AuthAPI.authLoginAPI(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(loginUser(response.data.userId))
            }
        })
}