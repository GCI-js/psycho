import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import "./SignInPage.css";

function LoginGoogleCore() {
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <button className="google_button" onClick={() => googleLogin()}>
      구글로 로그인
    </button>
  );
}

export default LoginGoogleCore;
