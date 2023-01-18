import React, { useState } from "react";
import "./Setting.css";
import rightArrowIcon from "../../img/rightArrow.png";

const Setting = () => {
  /*
[2022.01.12 jongseok lee] 
컴포넌트들 배열만 되어있습니다. CSS 수정해야 합니다 !
*/

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
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="settingBox">
          <div className="settingBoxPadding">
            <text className="settingText">프로필 공개</text>
            <div
              className={`toggle-container ${
                profileSettingSelected ? "enabled" : ""
              }`}
              onClick={profileSettingToggle}
            >
              <div
                className={`dialog-button ${
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
              className={`toggle-container ${
                pushSettingSelected ? "enabled" : ""
              }`}
              onClick={pushSettingToggle}
            >
              <div
                className={`dialog-button ${
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
              className={`toggle-container ${
                languageSettingSelected ? "enabled" : ""
              }`}
              onClick={languageSettingToggle}
            >
              <div
                className={`dialog-button ${
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
        <div className="settingBox withdrawlBox">
          <div className="settingBoxPadding">
            <text className="settingText">회원탈퇴</text>
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
  );
};

export default Setting;
