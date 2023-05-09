import "./App.css";
import Nav from "./Components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeThunkCreator} from "./Redux/Reducers/appReducer";
import Preloader from "./Components/common/Preloader";

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
                        <Routes>
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                            <Route path='/dialogs/*' element={<DialogsContainer />} />
                            <Route path='/users' element={<UsersContainer />} />
                            <Route path='/login' element={<Login />} />
                        </Routes>
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

export default compose(
    connect(mapStateToProps,{initializeThunkCreator})
)(App);
