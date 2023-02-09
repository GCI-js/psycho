import React, { useState } from "react";
import rightArrowIcon from "../../img/rightArrow.png";
// import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import shepherd from "../../service/shepherd";
import styles from "./index.module.scss";

const Setting = (properties: Properties) => {
  /*
[2022.01.12 jongseok lee] 
컴포넌트들 배열만 되어있습니다. CSS 수정해야 합니다 !
*/
  const id = [`_${idiotproof.trace(Setting)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const [profileSettingSelected, setProfileSettingSelected] = useState(true);
  const [pushSettingSelected, setPushSettingSelected] = useState(true);
  const [languageSettingSelected, setlanguageSettingSelected] = useState(true);
  const profileSettingToggle = () => {
    setProfileSettingSelected(!profileSettingSelected);
  };
  const pushSettingToggle = () => {
    setPushSettingSelected(!pushSettingSelected);
  };
  const languageSettingToggle = () => {
    setlanguageSettingSelected(!languageSettingSelected);
  };
  return (
    <div id={id} className={cl}>
      <div className="settingContainer">
        <div className="settingTitle">설정</div>
        <div className="settingBoxContainer">
          <div className="settingBox">
            <div className="settingBoxPadding">
              <text className="settingText">프로필 수정</text>
              <img
                src={rightArrowIcon}
                alt="rightArrowIcon"
                className="rightArrowIcon"
                onClick={() => shepherd.whip("setting", "RegisterPage1")}
              />
            </div>
          </div>
          <div className="settingBox">
            <div className="settingBoxPadding">
              <text className="settingText">프로필 공개</text>
              <div
                className={`toggle-container-${
                  profileSettingSelected ? "enabled" : ""
                }`}
                onClick={profileSettingToggle}
              >
                <div
                  className={`dialog-button-${
                    profileSettingSelected ? "" : "disabled"
                  }`}
                >
                  {/* {selected ? "YES" : "NO"} */}
                </div>
              </div>
            </div>
          </div>
          <div className="settingBox">
            <div className="settingBoxPadding">
              <text className="settingText">푸쉬알림 설정</text>
              <div
                className={`toggle-container-${
                  pushSettingSelected ? "enabled" : ""
                }`}
                onClick={pushSettingToggle}
              >
                <div
                  className={`dialog-button-${
                    pushSettingSelected ? "" : "disabled"
                  }`}
                >
                  {/* {selected ? "YES" : "NO"} */}
                </div>
              </div>
            </div>
          </div>
          <div className="settingBox">
            <div className="settingBoxPadding">
              <text className="settingText">언어 설정</text>
              <div
                className={`toggle-container-${
                  languageSettingSelected ? "enabled" : ""
                }`}
                onClick={languageSettingToggle}
              >
                <div
                  className={`dialog-button-${
                    languageSettingSelected ? "" : "disabled"
                  }`}
                >
                  {/* {selected ? "YES" : "NO"} */}
                </div>
              </div>
            </div>
          </div>
          <div className="settingBox">
            <div className="settingBoxPadding">
              <text className="settingText">이용약관</text>
              <img
                src={rightArrowIcon}
                alt="rightArrowIcon"
                className="rightArrowIcon"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
