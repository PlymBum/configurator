import './App.css';
import MyInput from './components/myInput/MyInput';
import Servers from "./Pages/Servers";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Server from "./Pages/Server";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/servers' element={<Servers/>}/>
                <Route path='/servers/:_id' element={<Server/>}/>
                        {/*<MyInput />*/}



            </Routes>

        </BrowserRouter>


);
}

export default App;