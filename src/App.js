import "./App.css";
import Nav from "./Components/Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeThunkCreator} from "./Redux/Reducers/appReducer";
import Preloader from "./Components/common/Preloader";
import store from "./Redux/reduxStore";
import React, {Suspense} from "react";
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"))

const App = (props) => {

    props.initializeThunkCreator()


    if (!props.initialize) {
        return <Preloader/>
    }
    return (
        <>
            <HeaderContainer/>
            <div className="wrapper">
                <Nav/>
                <div className='content'>
                    <Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                    </Suspense>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        initialize: state.app.initialize
    }
}

const AppContainer = compose(
    connect(mapStateToProps, {initializeThunkCreator})
)(App);

export const SocialNetwork = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}