import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
    return (
        <>

                <Header/>
                <div className="wrapper">
                    <Nav/>
                    <div className='content'>
                        <Routes>
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/dialogs/*' element={<Dialogs/>} />
                        </Routes>
                    </div>
                </div>

        </>
    );
};

export default App;
