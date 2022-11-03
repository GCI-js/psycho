import React, { useEffect } from "react";

function KakaoRedirect() {
  const REST_API_KEY = "b8287b0c6800ddd0cd859b528d49db27";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const location = document.location.href;
  const KAKAO_CODE = location.split("=")[1];

  useEffect(() => {
    if (!location.search("code")) return;
    getKakaoToken();
  }, []);

  const getKakaoToken = () => {
    const body = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`;
    console.log(body);
    fetch(`https://kauth.kakao.com/oauth/token`, {
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
        console.log(data.access_token);
        console.log(data.refresh_token);
      });
  };

  return <div>kakao login redirect</div>;
}

export default KakaoRedirect;
