import * as React from "react";


import shepherd from "./service/shepherd";
import idiotproof from "./service/idiotproof";

import BettingGraph from "../betting_graph/App";
import Jongseok from "../jongseok/App";
import Sangjin from "../sangjin/App";
import Wonjae from "../wonjae/App";

import Lamb from "./component/Lamb";
import Navigation from "./component/Navigation";

import styles from "./App.module.scss";


export default function App() {
  idiotproof.trace("App");

  React.useEffect(
      () => window.addEventListener("popstate", shepherd.bleat), []);

  return <div className={styles.index}>
      <div className="search-bar">
          search bar
          <div className="btn"></div>
      </div>
      <Lamb data-lamb="test" className="display">
          <Jongseok data-pose="jongseok"/>
          <BettingGraph data-pose="younghoon"/>
          <Sangjin data-pose="sangjin"/>
          <Wonjae data-pose="wonjae"/>
      </Lamb>
      <Navigation/>
  </div>
}
