import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./Reducers/dialogsReducer";
import profileReducer from "./Reducers/profileReducer";
import thunk from "redux-thunk";
import authReducer from "./Reducers/authReducer";
import usersReducer from "./Reducers/usersReducer";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers,applyMiddleware(thunk))

window.store = store

export default store



