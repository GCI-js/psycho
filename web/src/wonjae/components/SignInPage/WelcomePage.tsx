import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";
import "../Common/MainButton";
import MainButton from "../Common/MainButton";

function WelcomePage() {
  const navigate = useNavigate();

  const gotoLoginPage = () => {
    console.log("button Clicked");
    const path = `/signIn`;
    navigate(path);
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
