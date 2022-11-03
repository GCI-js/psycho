import * as React from "react";

import Box from "../Box/main";

import './main.scss';


export default function MainPage() {
    return <div className="main-page">
        <Box className="card"></Box>
        <Box className="card"></Box>
        <Box className="card"></Box>
        <Box className="card"></Box>
        <Box className="card"></Box>
        <Box className="card"></Box>
        <Box className="card" onClick={() => console.log("add new device")}>add device</Box>
    </div>
}
