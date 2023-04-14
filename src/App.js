import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = (props) => {
    return (
        <>
            <Header/>
                <div className="wrapper">
                    <Nav/>
                    <div className='content'>
                        <Routes>
                            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                            <Route path='/dialogs/*' element={<Dialogs dialogPage={props.state.dialogsPage} dispacth={props.dispatch}/>} />
                        </Routes>
                    </div>
                </div>
        </>
    );
};

export default App;
