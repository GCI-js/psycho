import * as React from "react";

import shepherd from "./service/shepherd";
import idiotproof from "./service/idiotproof";

import Jongseok from "../components/ProfilePage/App";
import Sangjin from "../sangjin/App";
import Wonjae from "../wonjae/App";

import Lamb from "./component/Lamb";
import Navigation from "./component/Navigation";

import styles from "./App.module.scss";


export default function App(properties: Properties) {
    const id = [`_${idiotproof.trace(App)}`, properties.id].join();
    const cl = [styles.index, properties.className].join(" ");
    React.useEffect(shepherd.initialize, []);
    return <div id={id} className={cl}>
        <div className="search-bar">
            search bar
            <div className="btn"></div>
        </div>
        <Lamb data-lamb="test" className="display" pageClassName="page">
            <Jongseok data-pose="jongseok"/>
            <Sangjin data-pose="sangjin"/>
            <Wonjae data-pose="wonjae"/>
        </Lamb>
        <Navigation/>
    </div>
}
