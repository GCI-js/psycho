import { cpuUsage } from "process";
import * as React from "react";

import fountain from "../../service/fountain";

import Box from "../Box";

import "./index.scss";


export default function Card(properties: any) {
    console.log("<Card/>");
    const device_id = properties.device_id;
    fountain.adopt(React.useState(0), device_id);
    const info = fountain.getDevice(device_id);
    const ref = React.useRef(null);

    React.useEffect(() => {
        fountain.pushDevice(device_id);
    }, []);
    React.useEffect(() => {
        const vs = ["98A8F8", "BCCEF8", "CDFCF6", "B1B2FF", "AAC4FF",
                    "D2DAFF", "EEF1FF"];
        const color  = vs[parseInt(device_id, 36) % vs.length];
        ref.current.style.background = "#" + color;
    });
    const root = info["user_id"];
    const user_id = root ? root["contexts"][0]["id"] : "";
    const contexts = root ? root["contexts"][0]["attributes"] : [];
    const states = contexts.map((v: any, i: number) =>
        <div key={i}>
            <span>{Object.keys(v)[0]}: </span>
            <span>{Object.values(v)[0] as string}</span>
        </div>)
    return <Box className={properties.className} ref={ref}
        onMouseDown={properties.onMouseDown}
    >
        <div>{user_id}</div>
        {states}
    </Box>
}
