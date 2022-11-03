import React from "react";
import ReactDOM from "react-dom";
// import LoginGoogle from "./LoginGoogle";
import LoginKakao from "./LoginKakao";
import LoginNaver from "./LoginNaver";
import LargeTitle from "../Common/LargeTitle";
import MediumTitle from "../Common/MediumTitle";

function SignInPage() {
  const clientId = "VtB1ejikeGzMfPNrh0E6";
  const callbackUrl = "http://127.0.0.1:3000/";

  const mediumTitleText: String = `
  <b>Psycho</b>로 로그인할
  계정을 선택해 주세요.
  `;

  return (
    <>
      <LargeTitle text="로그인" />
      <MediumTitle text={mediumTitleText} />
      <br />
      <br />
      {/* <LoginGoogle /> */}
      <LoginKakao />
      <LoginNaver />
      {/* <LoginNaver
        clientId={clientId}
        callbackUrl={callbackUrl}
        render={(props) => <div onClick={props.onClick}>Naver Login</div>}
        onSuccess={(naverUser) => console.log(naverUser)}
        onFailure={() => console.log("fail")}
      /> */}
    </>
  );
}

export default SignInPage;
