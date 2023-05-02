import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./Reducers/dialogsReducer";
import profileReducer from "./Reducers/profileReducer";
import thunk from "redux-thunk";
import authReducer from "./Reducers/authReducer";
import usersReducer from "./Reducers/usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers,applyMiddleware(thunk))

window.store = store

export default store



