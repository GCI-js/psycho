import MainButton from "../MainButton/MainButton";
import welcomeImage from "../../img/WelcomeImg.png";
import shepherd from "../../service/shepherd";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";
import { useEffect } from "react";

interface Props extends Properties {
  setNavVisible: Function;
}

const WelcomePage = (properties: Props) => {
  properties.setNavVisible(false);
  const id = [`_${idiotproof.trace(WelcomePage)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const largeTitle = "반가워요!";
  const context = `Psycho는 당시의 MBTI
  변동을 추적해드려요 !`;

  useEffect(() => {
    let isOldUser = localStorage.getItem("isOldUser");
    if (isOldUser == "true") {
      properties.setNavVisible(true);
      shepherd.whip("test", "NewsletterPage");
    }
  }, []);
  return (
    <div id={id} className={cl}>
      <div className="top_container">
        <div className="large-title">{largeTitle}</div>
        <img className="welcome_icon" src={welcomeImage} />
      </div>
      <div className="bottom_container">
        <div className="context">{context}</div>
        <div className="main_button">
          <MainButton
            text="시작해볼까요?"
            onClick={() => shepherd.whip("test", "RegisterPage1")}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
