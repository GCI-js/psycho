import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const gotoLoginPage = () => {
    console.log("button Clicked");
    const path = `/signIn`;
    navigate(path);
  };

  return (
    <div>
      <span>반가워요!</span>
      <br />

      <button onClick={gotoLoginPage}>시작해볼까요?</button>
    </div>
  );
}

export default WelcomePage;
