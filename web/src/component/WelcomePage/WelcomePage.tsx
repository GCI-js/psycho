import React from "react";
import "./WelcomePage.css";
// import "./Common/MainButton";
import MainButton from "../MainButton/MainButton";
import "../../css/common.css";
import MediumTitle from "../MediumTitle/MediumTitle";
import welcomeImage from "../../img/WelcomeImg.png";

function WelcomePage() {
  const largeTitle = "반가워요!";
  const mediumTitle = `Psycho는 당시의 MBTI
  변동을 추적해드려요 !`;

  // (원래는 로그인 페이지로 이동)
  const gotoSomeWhere = () => {
    console.log("어디로 가야할까요??");
  };

  return (
    <div>
      <div className="welcome_img_container">
        <div className="LargeTitle wonjae_title">{largeTitle}</div>
        <img src={welcomeImage} />
      </div>
      <MediumTitle customClass="welcome_medium_title" text={mediumTitle} />
      <MainButton text="시작해볼까요?" onClick={gotoSomeWhere} />
    </div>
  );
}

export default WelcomePage;
