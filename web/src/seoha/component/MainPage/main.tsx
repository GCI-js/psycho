import * as React from "react";
import shepherd from "../../service/shepherd";

import Box from "../Box/main";
import PageSelector from "../PageSelector/main";

import './main.scss';


export default function MainPage() {

    const [v, setValue] = React.useState(0);

    return <div className="main-page">
        <Box className="card"></Box>
        <Box className="card"></Box>
        <Box className="card"></Box>
        <Box className="card"></Box>
        <Box className="card"></Box>
        <Box className="card"></Box>
        <Box className="card" onClick={() => shepherd.setLocation("login")}>add device</Box>
        <PageSelector>
            <div data-page-name="one">1</div>
            <div data-page-name="two">2</div>
        </PageSelector>
    </div>
}
