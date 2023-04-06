import shepherd from "../../service/shepherd";

import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";

import { terms } from "../../resource/termsInUsePageText";
import ArrowLeft from "../../img/Arrow_left.png";

export const TermsInUsePage = (properties: Properties) => {
  const id = [`_${idiotproof.trace(TermsInUsePage)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  // navigation
  const handleBackButton = () => {
    shepherd.whip("test", "SettingPage");
  };

  return (
    <div id={id} className={cl}>
      <img className="back-button" src={ArrowLeft} onClick={handleBackButton} />
      <div className="large-title">이용약관</div>

      <div className="term-box">
        <div className="terms_wrapper">
          <div className="terms">{terms}</div>
        </div>
      </div>
    </div>
  );
};
