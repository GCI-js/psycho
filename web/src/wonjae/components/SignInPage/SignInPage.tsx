import React from "react";
import LoginGoogle from "./LoginGoogle";
import LoginKakao from "./LoginKakao";
import LoginNaver from "./LoginNaver";
import LoginNaverSDK from "./LoginNaverSDK";
import LargeTitle from "../Common/LargeTitle";
import MediumTitle from "../Common/MediumTitle";
import signInImg from "../../Assets/SignInImage.png";

function SignInPage() {
  const mediumTitleText: String = `
  Psycho로 로그인할
  계정을 선택해 주세요.
  `;

  return (
    <>
      <div className="welcome_img_container">
        <LargeTitle text="로그인" customClass="" />
        <MediumTitle customClass="" text={mediumTitleText} />
        <img src={signInImg} />
      </div>

      <br />
      <br />
      <LoginGoogle />
      {/* Only Use Google Login in Prototype */}
      {/* <LoginKakao />
      <LoginNaver /> */}
      {/* Login Naver Button with NaverSDK */}
      {/* <LoginNaverSDK /> */}
    </>
  );
}

export default SignInPage;
