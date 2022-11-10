import React, { useEffect } from "react";

function NaverRedirect() {
  const CLIENT_ID = "VtB1ejikeGzMfPNrh0E6";
  const REDIRECT_URI = "http://127.0.0.1:3000/naverLogin";
  const CLIENT_SECRET = "h1N8QEPClM";
  const STATE = "randomString";

  const authBody = `response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?${authBody}`;
  const NAVER_TOKEN_URL = `https://nid.naver.com/oauth2.0/token`;

  const location = document.location.href;

  useEffect(() => {
    if (!location.search("code")) return;
    getNaverToken();
  }, []);

  const getNaverToken = () => {
    const naverCode = location.split(/[=?&]/)[2];
    console.log(naverCode);
    const body = `grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${naverCode}$state=${STATE}`;
    fetch(NAVER_TOKEN_URL, {
      method: "POST",
      body: body,
      headers: {
        "Content-type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
        // "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => console.log(err))
      .then((data) => {
        console.log(data);
        // console.log(data.access_token);
        // console.log(data.refresh_token);
      });
  };
  return <div>naver login redirect</div>;
}

export default NaverRedirect;
