import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./Reducers/dialogsReducer";
import profileReducer from "./Reducers/profileReducer";
import UsersReducer from "./Reducers/usersReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: UsersReducer,
})

let store = createStore(reducers,applyMiddleware(thunk))

window.store = store

export default store



