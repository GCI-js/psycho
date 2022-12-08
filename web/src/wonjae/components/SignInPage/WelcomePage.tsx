import React from "react";
import "./WelcomePage.css";
import "../Common/MainButton";
import MainButton from "../Common/MainButton";
import shepherd from "../../../seoha/service/shepherd";

function WelcomePage() {
  const gotoLoginPage = () => {
    // shepherd.whip("wonjae", "signIn");

    // debug
    shepherd.whip("wonjae", "signUp1");
  };

  return (
    <div>
      <div className="wonjae_frame">
        <span className="wonjae_title">반가워요!</span>
        <br />
      </div>

      <div className="wonjae_medium_title" style={{ color: "#000000" }}>
        Psycho는 당신의 MBTI <br /> 변동을 추적해드려요!
      </div>

      <MainButton text="시작해볼까요?" onClick={gotoLoginPage} />
    </div>
  );
}

export default WelcomePage;
