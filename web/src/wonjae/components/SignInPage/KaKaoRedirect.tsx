import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// kakao auth return value interface
interface kakaoUser {
  access_token: String;
  expires_in: Number;
  refresh_token: String;
  refresh_token_expires_in: Number;
  token_type: String;
}

// backend return value interface
interface serverProps {}

function KakaoRedirect() {
  const REST_API_KEY = "b8287b0c6800ddd0cd859b528d49db27";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // URL Parsing
  const location = document.location.href;
  const KAKAO_CODE = location.split("=")[1];

  const navigate = useNavigate();

  useEffect(() => {
    if (!location.search("code")) return;
    const doLogin = async () => {
      const token = await getKakaoToken();
      console.log(`token = ${token}`);

      // BackEnd 통신
      // const getUserState = await sendUserInfo();
      // redirectWithUserState(getUserState);
    };
    doLogin();
  }, []);

  const getKakaoToken = async () => {
    const body = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`;
    console.log(body);
    const retVal = await fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => console.log(err))
      .then((data) => {
        console.log(data);
        return data;
      });
    return retVal;
  };

  // TODO Send UserInfo to Server
  const sendUserInfo = () => {
    console.log("Send user info to Server");
    // 플랫폼, token 정보 함께 넘기기
    const retVal: serverProps = {};
    return retVal;
  };

  // TODO UserState 따라 Page Redirect
  const redirectWithUserState = () => {};

  // 가입 아직 안했을떄
  const gotoSignUp = () => {
    const path = `/signUp1`;
    navigate(path);
  };

  // 이미 회원일 때
  const gotoMain = () => {};

  return (
    <div>
      <div>kakao login redirect</div>
      <br />
      {/* API 연동 전 Test용 */}
      <button onClick={gotoSignUp}>New User</button>
      <br />
      <button onClick={gotoSignUp}>Signing Up User</button>
      <br />
      <button onClick={gotoMain}>Already Sign Up</button>
    </div>
  );
}

export default KakaoRedirect;
