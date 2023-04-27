import { useEffect, useState } from "react";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";
import { terms } from "../../resource/termsInUsePageText";
import ArrowLeft from "../../img/Arrow_left.png";

interface Props extends Properties {
  setNavVisible: Function;
}

export const RegisterPage3 = (properties: Props) => {
  const id = [`_${idiotproof.trace(RegisterPage3)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  // checkbox state
  const [isAgreed, setIsAgreed] = useState(false);
  const checkHandler = () => {
    setIsAgreed(!isAgreed);
  };

  // navigation
  const handleBackButton = () => {
    shepherd.whip("test", "RegisterPage2");
  };

  const gotoNextStep = () => {
    localStorage.setItem("isOldUser", "true");
    properties.setNavVisible(true);
    shepherd.whip("test", "NewsletterPage");
  };

  useEffect(() => {
    let isOldUser = localStorage.getItem("isOldUser");
    if (isOldUser == "true") {
      properties.setNavVisible(true);
      shepherd.whip("test", "NewsletterPage");
    }
  }, []);

  return (
    <div id={id} className={cl}>
      <img className="back-button" src={ArrowLeft} onClick={handleBackButton} />
      <div className="large-title">이용약관</div>

      <div className="term-box">
        <div className="terms_wrapper">
          <div className="terms">{terms}</div>
        </div>
      </div>

      <div className="agree_box">
        <div className="checkbox_wrapper">
          <div
            className={`check_box ${isAgreed ? "checked" : "unchecked"}`}
            onClick={() => checkHandler()}
          ></div>
          <div className="text">
            본인은 19세 이상이며 이용약관에 동의합니다.
          </div>
        </div>
      </div>
      <button
        className={`next-step-button${isAgreed ? "-on" : "-off"}`}
        onClick={isAgreed ? gotoNextStep : () => {}}
      >
        계속
      </button>
    </div>
  );
};
