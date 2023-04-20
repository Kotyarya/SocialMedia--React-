import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = (props) => {
    return (
        <>
            <Header/>
                <div className="wrapper">
                    <Nav/>
                    <div className='content'>
                        <Routes>
                            <Route path='/profile' element={<Profile />}/>
                            <Route path='/dialogs/*' element={<DialogsContainer />} />
                            <Route path='/users' element={<UsersContainer />} />
                        </Routes>
                    </div>
                </div>
        </>
    );
};

export default App;
