import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";

import styles from "./index.module.scss";
import { useState } from "react";

import userIcon from "../../img/user.png";
import userFillIcon from "../../img/userFill.png";
import flagIcon from "../../img/flag.png";
import flagFillIcon from "../../img/flagFill.png";
import homeIcon from "../../img/home.png";
import homeFillIcon from "../../img/homeFill.png";
import questionIcon from "../../img/question.png";
import questionFillIcon from "../../img/questionFill.png";

export default function Navigation(properties: Properties) {
  const id = [`_${idiotproof.trace(Navigation)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const [curPos, setCurPos] = useState(shepherd.readPoses().test);
  const handleNavClick = (dest: string) => {
    setCurPos(dest);
    shepherd.whip("test", dest);
    if (dest == "ProfilePage") {
      shepherd.chase(dest);
    }
  };
  const handleQuestionPage = () => {
    let _initorder = parseInt(localStorage.getItem("questionOrder"));
    if (_initorder === 5) {
      handleNavClick("QuestionEnd");
    } else {
      handleNavClick("QuestionPage");
    }
  };
  return (
    <div id={id} className={cl}>
      <div className="icon-wrapper">
        <img
          className={curPos == "NewsletterPage" ? "fill-icon" : "icon"}
          src={curPos == "NewsletterPage" ? homeFillIcon : homeIcon}
          onClick={() => handleNavClick("NewsletterPage")}
        />
      </div>
      <div className="icon-wrapper">
        <img
          className={curPos == "QuestionPage" ? "fill-icon" : "icon"}
          src={
            curPos == "QuestionPage" || curPos == "QuestionEnd"
              ? questionFillIcon
              : questionIcon
          }
          onClick={() => handleQuestionPage()}
        />
      </div>
      <div className="icon-wrapper">
        <img
          className={curPos == "ProfilePage" ? "fill-icon" : "icon"}
          src={curPos == "ProfilePage" ? userFillIcon : userIcon}
          onClick={() => handleNavClick("ProfilePage")}
        />
      </div>
      <div className="icon-wrapper">
        <img
          className={curPos == "SettingPage" ? "fill-icon" : "icon"}
          src={curPos == "SettingPage" ? flagFillIcon : flagIcon}
          onClick={() => handleNavClick("SettingPage")}
        />
      </div>
      {/* <div>
        <Search className={styles.search_svg} />
      </div> */}
      {/* <div onClick={() => handleNavClick("WelcomePage")}>
        WelcomePage
      </div> */}
    </div>
  );
}
