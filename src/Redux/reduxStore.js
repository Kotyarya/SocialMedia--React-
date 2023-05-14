import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./Reducers/dialogsReducer";
import profileReducer from "./Reducers/profileReducer";
import thunk from "redux-thunk";
import authReducer from "./Reducers/authReducer";
import usersReducer from "./Reducers/usersReducer";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./Reducers/appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

// let store = createStore(reducers,applyMiddleware(thunk))
// window.__state__ = store


export default store



