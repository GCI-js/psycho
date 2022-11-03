import React, { useEffect } from "react";
import { getEnvironmentData } from "worker_threads";
import "./SignInPage.css";

function LoginNaver() {
  const CLIENT_ID = "VtB1ejikeGzMfPNrh0E6";
  // const REDIRECT_URI = "http://127.0.0.1:3000/";
  const REDIRECT_URI = "http://127.0.0.1:3000/naverLogin/";
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

  const handleLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

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

  return (
    <button onClick={handleLogin} className="naver_button">
      naver login
    </button>
  );
}

// declare global {
//   interface Window {
//     naver: any;
//   }
// }

// export interface NaverUser {
//   email: string;
//   name: string;
//   id: string;
//   profile_image: string;
//   age?: string;
//   birthday?: string;
//   gender?: string;
//   nickname?: string;
// }

// interface IProps {
//   clientId: string;
//   callbackUrl: string;
//   render: (
//     props: any
//   ) => React.ComponentElement<any, any> | Element | JSX.Element;
//   onSuccess: (result: NaverUser) => void;
//   onFailure: () => void;
// }

// function LoginNaver(props: IProps) {
//   React.useEffect(() => {
//     initNaverLogin();
//     getData();
//   });

//   const initNaverLogin = () => {
//     const naverLogin = new window.naver.LoginWithNaverId({
//       clientId: props.clientId,
//       callbackUrl: props.callbackUrl,
//       isPopup: false,
//       loginButton: { color: "white", type: 1, height: 60 },
//       callbackHandle: true,
//     });
//     naverLogin.init();
//   };

//   const getData = () => {
//     if (window.location.href.includes("access_token")) {
//       console.log("We got access token");
//     } else {
//       console.log("No Token");
//     }
//   };

//   return (
//     <>
//       <div id="naverIdLogin" />
//     </>
//   );
// }

export default LoginNaver;
