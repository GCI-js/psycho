import * as React from "react";

import shepherd from "./service/shepherd";
import idiotproof from "./service/idiotproof";

// import Jongseok from "../component/ProfilePage/App";
// import Wonjae from "../wonjae/App";
import ProfileStats from "./component/ProfilePage/App";
import WelcomePage from "./component/WelcomePage/WelcomePage";
import Lamb from "./component/Lamb";
import Navigation from "./component/Navigation";

import styles from "./App.module.scss";

export default function App(properties: Properties) {
  const id = [`_${idiotproof.trace(App)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  React.useEffect(shepherd.initialize, []);
  return (
    <div id={id} className={cl}>
      <div className="search-bar">
        search bar
        <div className="btn"></div>
      </div>
      <Lamb data-lamb="test" className="display" pageClassName="page">
        <ProfileStats data-pose="ProfilePage" />
        <WelcomePage data-pose="WelcomePage" />
      </Lamb>
      <Navigation />
    </div>
  );
}
