import React from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";
import "./SignInPage.css";

// function loginButton() {
//   return (
//     <>
//       <button onClick={() => login()}>sign in</button>
//     </>
//   );
// }

function LoginGoogle() {
  const CLIENT_ID =
    "195491848597-1jv1gs7jto9sqhc46v7iarpnk2ot4i4n.apps.googleusercontent.com";

  function onSuccess(res: any) {
    console.log(res);
  }

  const onFailure = (res: any) => {
    console.log(res);
  };

  const googleButton = () => {
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
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  // const clickGoogleButton = () => {
  //   googleButton;
  // };

  //   const login = useGoogleLogin({
  //     onSuccess: (codeResponse) => onSuccess(codeResponse),
  //   });

  return (
    // <React.Fragment>
    //   <GoogleOAuthProvider clientId={CLIENT_ID}>
    //     <button onClick={() => login()}>button</button>
    //   </GoogleOAuthProvider>
    // </React.Fragment>

    // <div className="google_button" onClick={clickGoogleButton}>
    //   구글로 시작하기
    //   <googleButton />
    // </div>

    <React.Fragment>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <div className="google_button" onClick={() => login()}>
          구글로 시작하기
        </div>
      </GoogleOAuthProvider>
    </React.Fragment>

    // <div>
    //   <GoogleLogin
    //     clientId={CLIENT_ID}
    //     responseType="id_token"
    //     buttonText="Sign in with google"
    //     onSuccess={onSuccess}
    //     onFailure={onFailure}
    //   />
    // </div>
  );
}

export default LoginGoogle;
