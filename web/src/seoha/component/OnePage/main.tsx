import * as React from "react";

import PageSelector from "../PageSelector/main";
import LoginModal from "../LoginModal/main";
import MainPage from "../MainPage/main";

import './main.scss';


function OnePage() {
    console.log("<OnePage/>");

    return <div className="one-page">
        <PageSelector className="router">
            <LoginModal data-page-name="login"/>
            <MainPage data-page-name="main"/>
            <div data-page-name="device">3</div>
        </PageSelector>
    </div>
}

export default OnePage;
