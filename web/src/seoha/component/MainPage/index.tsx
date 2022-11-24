import * as React from "react";

import fountain from "../../service/fountain";

import Lamb from "../Lamb";
import Cards from "../Cards";
import DevicePage from "../DevicePage";

import './index.scss';


export default function MainPage() {
    console.log("<MainPage/>");

    fountain.adopt(React.useState(0), "main");
    const [groups, group2ids] = fountain.getMetaInfo("username");
    
    React.useEffect(() => fountain.pushMetaInfo("username"), []);

    return <div className="main-page-j23jh28fds8fh">
        <div className="board">
            <div className="add-btn">+</div>
            <div className="add-btn">+</div>
        </div>
        <div>{groups.map(v => <Cards name={v} ids={group2ids[v]}/>)}</div>
        <Lamb data-lamb="device" className="device">
            <div className="hide" data-pose="hide"></div>
            <DevicePage data-pose="display"/>
        </Lamb>
    </div>
}
