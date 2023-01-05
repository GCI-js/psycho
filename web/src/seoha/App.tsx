import * as React from "react";

import Lamb from "./component/Lamb";

import shepherd from "./service/shepherd";

import BettingGraph from "../betting_graph/App";
import Jongseok from "../jongseok/App";
import Sangjin from "../sangjin/App";
import Wonjae from "../wonjae/App";

import Navigation from "./component/Navigation";

import "./App.scss";

export default function App() {
  console.log("<App/>");

  React.useEffect(
    () => window.addEventListener("popstate", shepherd.bleat),
    []
  );

  return (
    <div className="app-j238dndx8w4hweh">
      <div className="search-bar">
        search bar
        <div className="btn"></div>
      </div>
      <Lamb data-lamb="test" className="display">
        <Jongseok data-pose="jongseok" />
        <BettingGraph data-pose="younghoon" />
        <Sangjin data-pose="sangjin" />
        <Wonjae data-pose="wonjae" />
      </Lamb>
      <Navigation />
    </div>
  );
}
