import {AuthAPI} from "../../API/API";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = "SET_AUTH_USER"


const initialState = {
    login: null,
    id: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state))


    switch (action.type) {
        case SET_AUTH_USER:
            stateCopy = {
                ...action.data.data,
                isAuth: action.isAuth
            }
            return stateCopy;
        default:
            return state
    }
}

export default authReducer
export const setAuthUser = (data, isAuth) => ({type: SET_AUTH_USER, data, isAuth})


export const setAuthUserThunkCreator = () => (dispatch) => {
    return AuthAPI.authMeAPI()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUser(data, true))
            }
        })
}

export const loginUserThunkCreator = (email, password, rememberMe) => (dispatch) => {
    AuthAPI.authLoginAPI(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserThunkCreator())
            } else (
                dispatch(stopSubmit("Login", {_error: response.messages[0]}))
            )
        })
}

export const logoutUserThunkCreator = () => (dispatch) => {
    AuthAPI.authLogoutAPI()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUser({email: null, id: null, login: null}, false))
            }
        })
}