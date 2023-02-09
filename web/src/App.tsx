import * as React from "react";

import shepherd from "./service/shepherd";
import idiotproof from "./service/idiotproof";
import WelcomePage from "./component/WelcomePage";
import Lamb from "./component/Lamb";
import MainFrame from "./component/MainFrame";

import styles from "./App.module.scss";

export default function App(properties: Properties) {
  const id = `_${idiotproof.trace(App)}`;
  const cl = [styles.index, properties.className].join(" ");
  React.useEffect(shepherd.initialize, []);
  return (
    <div id={id} className={cl}>
        <Lamb data-lamb="introduction" className="display" pageClassName="page">
            <WelcomePage data-pose="greeting"/>
            <MainFrame data-pose="launching"/>
        </Lamb>
    </div>
  );
}
