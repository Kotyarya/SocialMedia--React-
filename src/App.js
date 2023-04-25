import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <>
            <Header/>
                <div className="wrapper">
                    <Nav/>
                    <div className='content'>
                        <Routes>
                            <Route path='/profile/*' element={<ProfileContainer />}/>
                            <Route path='/dialogs/*' element={<DialogsContainer />} />
                            <Route path='/users' element={<UsersContainer />} />
                        </Routes>
                    </div>
                </div>
        </>
    );
};

export default App;
