import * as React from "react";

import Lamb from "./component/Lamb";
import LoginModal from "./component/LoginModal";
import MainPage from "./component/MainPage";

import './App.scss';


function App() {
    console.log("<App/>");
    return <div className="app-j238dndx8w4hweh">
        <Lamb className="router" data-lamb="lamb">
            <LoginModal data-pose="login"/>
            <MainPage data-pose="main"/>
        </Lamb>
    </div>
}

export default App;
