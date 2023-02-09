import * as React from "react";

import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import ProfileStats from "../ProfilePage/App";
import WelcomePage from "../WelcomePage";
import Lamb from "../Lamb";
import Navigation from "../Navigation";

import { NewsletterPage } from "../NewsletterPage/NewsletterPage";
import QuestionPage from "../QuestionPage/QuestionPage";
import Setting from "../Setting";
import RegisterPage1 from "../RegisterPage1";
import RegisterPage2 from "../RegisterPage2";
import { TermsInUsePage } from "../TermsInUsePage";

import styles from "./index.module.scss";

export default function MainFrame(properties: Properties) {
    const id = `_${idiotproof.trace(MainFrame)}`;

    const user_chk = localStorage.getItem("isOldUser");
    shepherd.adopt("main-frame", id);
    React.useEffect(() => {
      if (!user_chk) shepherd.whip("introduction", "greeting");
    })
    if (!user_chk) return <></>
  
    const cl = [styles.index, properties.className].join(" ");
    React.useEffect(shepherd.initialize, []);
    return <div id={id} className={cl}>
        <Lamb data-lamb="test" className="display" pageClassName="page">
            <NewsletterPage data-pose="NewsletterPage" />
            <QuestionPage data-pose="QuestionPage" />
            {/* <ProfileStats data-pose="ProfilePage" />
            <Setting data-pose="Setting" />
            <RegisterPage1 data-pose="RegisterPage1" />
            <RegisterPage2 data-pose="RegisterPage2" />
            <TermsInUsePage
                data-pose="TermsInUsePage"
                setNavVisible={setNavVisible}
            /> */}
        </Lamb>
        <Navigation />
    </div>
}
