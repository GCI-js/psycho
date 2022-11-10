// Naver Loing SDK 사용하여 로그인
import React, { useEffect } from "react";

const NAVER_ID_SDK_URL =
  "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js";
const CLIENT_ID = "VtB1ejikeGzMfPNrh0E6";
const REDIRECT_URI = "http://127.0.0.1:3000/naverLogin/";

declare global {
  interface Window {
    naver: any;
  }
}

//   const naver = window["naver"];
const { naver } = window;

// Load Naver Login SDK in script
const loadScript = () => {
  if (document && document.querySelectorAll("#naver-login-sdk").length === 0) {
    const script = document.createElement("script");
    script.id = "naver-login-sdk";
    script.src = NAVER_ID_SDK_URL;
    script.onload = () => initNaverLogin();
    document.head.appendChild(script);
  }
};

const initNaverLogin = () => {
  const naverLogin = new naver.LoginWithNaverId({
    clientId: CLIENT_ID,
    callbackUrl: REDIRECT_URI,
    // 팝업창으로 로그인을 진행할 것인지?
    isPopup: false,
    // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
    loginButton: { color: "green", type: 3, height: 58 },
    callbackHandle: true,
  });

  naverLogin.init();
};

function LoginNaverSDK() {
  useEffect(CDM, []);

  function CDM() {
    loadScript();
    initNaverLogin();
  }

  return <div id="naverIdLogin">naver</div>;
}

export default LoginNaverSDK;
