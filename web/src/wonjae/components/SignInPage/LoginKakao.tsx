import React, { useEffect } from "react";
import "./SignInPage.css";

function LoginKakao() {
  const REST_API_KEY = "b8287b0c6800ddd0cd859b528d49db27";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div>
      <button onClick={handleLogin} className="kakao_button">
        카카오로 시작하기
      </button>
    </div>
  );
}

export default LoginKakao;
