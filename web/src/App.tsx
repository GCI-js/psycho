import * as React from "react";
import { useState } from "react";

import shepherd from "./service/shepherd";
import idiotproof from "./service/idiotproof";
import "./css/common.module.scss";
import ProfileStats from "./component/ProfilePage/App";
import WelcomePage from "./component/WelcomePage";
import Lamb from "./component/Lamb";
import Navigation from "./component/Navigation";

import styles from "./App.module.scss";
import { NewsletterPage } from "./component/NewsletterPage/NewsletterPage";
import QuestionPage from "./component/QuestionPage/QuestionPage";
import Setting from "./component/Setting";
import RegisterPage1 from "./component/RegisterPage1";
import RegisterPage2 from "./component/RegisterPage2";
import { TermsInUsePage } from "./component/TermsInUsePage";

export default function App(properties: Properties) {
  const id = [`_${idiotproof.trace(App)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const [navVisible, setNavVisible] = useState(true);
  React.useEffect(shepherd.initialize, []);
  return (
    <div id={id} className={cl}>
      <Lamb data-lamb="test" className="display" pageClassName="page">
        <NewsletterPage data-pose="NewsletterPage" />
        <WelcomePage data-pose="WelcomePage" setNavVisible={setNavVisible} />
        <QuestionPage data-pose="QuestionPage" />
        <ProfileStats data-pose="ProfilePage" />
        <Setting data-pose="Setting" />
        <RegisterPage1
          data-pose="RegisterPage1"
          setNavVisible={setNavVisible}
        />
        <RegisterPage2 data-pose="RegisterPage2" />
        <TermsInUsePage
          data-pose="TermsInUsePage"
          setNavVisible={setNavVisible}
        />
      </Lamb>
      {navVisible && <Navigation />}
    </div>
  );
}
