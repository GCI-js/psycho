import React from "react";
import "./WelcomePage.css";
import "../Common/MainButton";
import MainButton from "../Common/MainButton";
import shepherd from "../../../seoha/service/shepherd";
import LargeTitle from "../Common/LargeTitle";
import MediumTitle from "../Common/MediumTitle";
import welcomeImage from "../../Assets/WelcomeImg.png";

function WelcomePage() {
  const mediumTitle = `Psycho는 당시의 MBTI
  변동을 추적해드려요 !`;
  var userNum = 30030;
  const gotoSignInPage = () => {
    // shepherd.whip("wonjae", "signIn");
    shepherd.whip("wonjae", "signUp1");
  };

  return (
    <div>
      <div className="wj_img_container">
        <LargeTitle text="반가워요!" />
        <img src={welcomeImage} />
      </div>
      <MediumTitle text={mediumTitle} />
      <div className="user_num_phrase">벌써 {userNum}명이 가입했어요!</div>
      <MainButton text="시작해볼까요?" onClick={gotoSignInPage} />
    </div>
  );
}

export default WelcomePage;
