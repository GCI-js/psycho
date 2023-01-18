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
import { NewsletterPage } from "./component/NewsletterPage/NewsletterPage";
import QuestionPage from "./component/QuestionPage/QuestionPage";
import Setting from "./component/Setting/Setting";
import EditProfile from "./component/EditProfile/EditProfile";
import EditUserInfo from "./component/EditUserInfo/EditUserInfo";

export default function App(properties: Properties) {
  const id = [`_${idiotproof.trace(App)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  React.useEffect(shepherd.initialize, []);
  const setOld = () => {
    localStorage.setItem("isOldUser", "true");
  };
  const setNew = () => {
    localStorage.removeItem("isOldUser");
  };
  return (
    <div id={id} className={cl}>
      <button onClick={setOld}>setOld</button>
      <button onClick={setNew}>setNew</button>
      <Lamb data-lamb="test" className="display" pageClassName="page">
        <NewsletterPage data-pose="NewsletterPage" />
        <WelcomePage data-pose="WelcomePage" />

        <QuestionPage data-pose="QuestionPage" />
        <ProfileStats data-pose="ProfilePage" />
        <Setting data-pose="Setting" />
        <EditProfile data-pose="EditProfile" />
        <EditUserInfo data-pose="EditUserInfo" />
      </Lamb>
      <Navigation />
    </div>
  );
}
