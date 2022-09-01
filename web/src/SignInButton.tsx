import React from "react";
import "./SignInButton.css";

interface propsType {
  platform: String;
}

function SignInButton(props: propsType) {
  const platform = props.platform;
  var name;
  switch (platform) {
    case "google":
      name = "구글";
      break;
    case "naver":
      name = "네이버";
      break;
    case "kakao":
      name = "카카오";
      break;
    default:
      name = "이름없음";
      break;
  }

  return (
    <>
      <button className="sign-in-button">{name}로 로그인하기</button>
      <br />
    </>
  );
}

export default SignInButton;
