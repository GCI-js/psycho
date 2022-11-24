import React from "react";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";
import "./SignInPage.css";

function LoginGoogle() {
  const CLIENT_ID =
    "195491848597-1jv1gs7jto9sqhc46v7iarpnk2ot4i4n.apps.googleusercontent.com";

  function onSuccess(res: any) {
    console.log(res);
  }

  const onFailure = (res: any) => {
    console.log(res);
  };

  return (
    <React.Fragment>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GoogleLogin
          onSuccess={(credentialResponse) => onSuccess(credentialResponse)}
          onError={() => onFailure}
        />
      </GoogleOAuthProvider>
    </React.Fragment>
  );
}

export default LoginGoogle;
