import * as React from "react";

import shepherd from "./service/shepherd";

import BettingGraph from "../betting_graph/App";
import Jongseok from "../jongseok/App";
import Sangjin from "../sangjin/App";
import Wonjae from "../wonjae/App";

import Lamb from "./component/Lamb";

import './App.scss';


export default function App() {
    console.log("<App/>");

    React.useEffect(
        () => window.addEventListener("popstate", shepherd.bleat), []);

    return <div className="app-j238dndx8w4hweh">
        <div>
            <div onClick={() => shepherd.whip("test", "jongseok")}>
                jongseok
            </div>
            <div onClick={() => shepherd.whip("test", "younghoon")}>
                younghoon
            </div>
            <div onClick={() => shepherd.whip("test", "sangjin")}>
                sangjin
            </div>
            <div onClick={() => shepherd.whip("test", "wonjae")}>
                wonjae
            </div>
        </div>
        <Lamb data-lamb="test">
            <Jongseok data-pose="jongseok"/>
            <BettingGraph data-pose="younghoon"/>
            <Sangjin data-pose="sangjin"/>
            <Wonjae data-pose="wonjae"/>
        </Lamb>
    </div>
}
