import React from "react";
import SignInButton from "./SignInButton";
import SignTitle from "./SignTitle";

function SignPage() {
  return (
    <>
      <SignTitle />
      <br />
      <br />
      <SignInButton platform="google" />
      <SignInButton platform="kakao" />
      <SignInButton platform="naver" />
    </>
  );
}

export default SignPage;
