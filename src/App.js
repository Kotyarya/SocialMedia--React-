import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

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
                        </Routes>
                    </div>
                </div>
        </>
    );
};

export default App;
