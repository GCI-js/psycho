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
import { NewsletterPage } from "./component/NewsletterPage";
import QuestionPage from "./component/QuestionPage";

import SettingPage from "./component/SettingPage";
import RegisterPage1 from "./component/RegisterPage1";
import RegisterPage2 from "./component/RegisterPage2";
import { TermsInUsePage } from "./component/TermsInUsePage";
import EditProfilePage1 from "./component/EditProfilePage1/index";
import EditProfilePage2 from "./component/EditProfilePage2/index";
import QuestionEnd from "./component/QuestionEnd";
import QuestionPast from "./component/QuestionPast";
import QuestionSpecialPage from "./component/QuestionSpecialPage";
import { RegisterPage3 } from "./component/RegisterPage3";

export default function App(properties: Properties) {
  const id = [`_${idiotproof.trace(App)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const [navVisible, setNavVisible] = useState(true);
  React.useEffect(shepherd.initialize, []);
  return (
    <div id={id} className={cl}>
      <Lamb data-lamb="test" className="display" pageClassName="page">
        <WelcomePage data-pose="WelcomePage" setNavVisible={setNavVisible} />
        <NewsletterPage data-pose="NewsletterPage" />
        <QuestionPage data-pose="QuestionPage" />
        <ProfileStats data-pose="ProfilePage" />
        <SettingPage data-pose="SettingPage" />
        <EditProfilePage1
          data-pose="EditProfilePage1"
          setNavVisible={setNavVisible}
        />
        <EditProfilePage2
          data-pose="EditProfilePage2"
          setNavVisible={setNavVisible}
        />
        <RegisterPage1
          data-pose="RegisterPage1"
          setNavVisible={setNavVisible}
        />
        <RegisterPage2
          data-pose="RegisterPage2"
          setNavVisible={setNavVisible}
        />
        <RegisterPage3
          data-pose="RegisterPage3"
          setNavVisible={setNavVisible}
        />
        <QuestionEnd data-pose="QuestionEnd" />
        <QuestionPast data-pose="QuestionPast" />
        <QuestionSpecialPage data-pose="QuestionSpecialPage" />
        <TermsInUsePage data-pose="TermsInUsePage" />
      </Lamb>
      {navVisible && <Navigation />}
    </div>
  );
}
