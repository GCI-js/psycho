import React, { useState } from "react";
import shepherd from "../../service/shepherd";

import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";

import { terms } from "../../resource/termsInUsePageText";

import MainButton from "../MainButton/MainButton";
import ArrowLeft from "../../img/Arrow_left.png";

interface Props extends Properties {
  setNavVisible: Function;
}

export const TermsInUsePage = (properties: Props) => {
  const id = [`_${idiotproof.trace(TermsInUsePage)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  console.log(styles);

  // checkbox state
  const [isAgreed, setIsAgreed] = useState(false);
  const checkHandler = () => {
    setIsAgreed(!isAgreed);
  };

  // navigation
  const handleRegisterDone = () => {
    localStorage.setItem("isOldUser", "true");
    properties.setNavVisible(true);
    shepherd.whip("test", "NewsletterPage");
  };
  const handleBackButton = () => {
    shepherd.whip("test", "RegisterPage2");
  };

  return (
    <div id={id} className={cl}>
      <img className="back-button" src={ArrowLeft} onClick={handleBackButton} />
      <div className="large_title">이용약관</div>

      <div className="term_and_agree">
        <div className="term_box">
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
      </div>

      <div className="main_btn_wrapper">
        <MainButton
          text="계속"
          isAgreed={isAgreed}
          onClick={() => {
            if (isAgreed) handleRegisterDone();
          }}
        />
      </div>
    </div>
  );
};
