import * as React from "react";

import shepherd from "../../service/shepherd";
import foutain from "../../service/fountain";

import Box from "../Box";

import "./index.scss";


export default function DevicePage() {
    console.log("<DevicePage/>");
    foutain.adopt(React.useState(0), "edit");
    const info = foutain.getDevice();
    return <div className="device-page-jk1j2k1jljk2l" onClick={
        () => shepherd.chase("device", "hide")
    }>
        <Box className="content" onClick={(v: Event) => {v.stopPropagation()}}>
            {JSON.stringify(info)}
        </Box>
    </div>
}
