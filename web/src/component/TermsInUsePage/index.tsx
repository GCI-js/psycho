import shepherd from "../../service/shepherd";

import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";

import { terms } from "../../resource/termsInUsePageText";

import MainButton from "../MainButton/MainButton";

export const TermsInUsePage = (properties: Properties) => {
  const id = [`_${idiotproof.trace(TermsInUsePage)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  console.log(styles);

  const handleRegisterDone = () => {
    localStorage.setItem("isOldUser", "true");
    shepherd.whip("test", "NewsletterPage");
  };
  return (
    <div className="Page">
      <div id={id} className={cl}>
        <div className="page_wrapper">
          <div className="LargeTitle">이용약관</div>

          <div className="term_box">
            <div className="terms">{terms}</div>
          </div>

          <div className="checkbox_wrapper">
            <input type="checkbox" />
            <div className="text">
              본인은 19세 이상이며 이용약관에 동의합니다.
            </div>
          </div>

          <MainButton
            text="계속"
            onClick={() => {
              handleRegisterDone();
            }}
          />
        </div>
      </div>
    </div>
  );
};
