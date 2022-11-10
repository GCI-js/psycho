// Naver Login REST API 사용하여 로그인
import React, { useEffect } from "react";

function LoginNaver() {
  const CLIENT_ID = "VtB1ejikeGzMfPNrh0E6";
  const REDIRECT_URI = "http://127.0.0.1:3000/naverLogin/";
  const CLIENT_SECRET = "h1N8QEPClM";
  const STATE = "randomString";

  const authBody = `response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?${authBody}`;
  const NAVER_TOKEN_URL = `https://nid.naver.com/oauth2.0/token`;

  const handleLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <button onClick={handleLogin} className="naver_button">
      naver login
    </button>
  );
}

export default LoginNaver;
