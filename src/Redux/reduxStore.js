import {combineReducers, createStore} from "redux";
import dialogsReducer from "./Reducers/dialogsReducer";
import profileReducer from "./Reducers/profileReducer";
import UsersReducer from "./Reducers/usersReducer";
import authReducer from "./Reducers/authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: UsersReducer,
    auth: authReducer
})

let store = createStore(reducers)

window.store = store

export default store



