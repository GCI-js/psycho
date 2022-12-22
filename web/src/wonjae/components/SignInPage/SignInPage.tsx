import React from "react";
import LoginGoogle from "./LoginGoogle";
import LoginKakao from "./LoginKakao";
import LoginNaver from "./LoginNaver";
import LoginNaverSDK from "./LoginNaverSDK";
import LargeTitle from "../Common/LargeTitle";
import MediumTitle from "../Common/MediumTitle";

function SignInPage() {
  const mediumTitleText: String = `
  Psycho로 로그인할
  계정을 선택해 주세요.
  `;

  return (
    <>
      <LargeTitle text="로그인" customClass="" />
      <MediumTitle customClass="" text={mediumTitleText} />
      <br />
      <br />
      <LoginGoogle />
      <LoginKakao />
      <LoginNaver />
      {/* <LoginNaverSDK /> */}
    </>
  );
}

export default SignInPage;
