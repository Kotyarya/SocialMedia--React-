import "./App.css";
import Nav from "./Components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

const App = () => {
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

export default App;
