import React from "react";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";
import "./SignInPage.css";
import shepherd from "../../../seoha/service/shepherd";
import { getUserWithCredential, updateUserInfo } from "../../WJ_ServerAPI";

function LoginGoogle() {
  const CLIENT_ID =
    "195491848597-1jv1gs7jto9sqhc46v7iarpnk2ot4i4n.apps.googleusercontent.com";

  const moveToSignUpStage = (stage: number) => {
    switch (stage) {
      case 0: {
        shepherd.whip("wonjae", "signUp1");
        break;
      }
      case 1: {
        shepherd.whip("wonjae", "signUp2");
        break;
      }
      case 2: {
        shepherd.whip("wonjae", "signUp3");
        break;
      }
      case 3: {
        shepherd.whip("wonjae", "signUp4");
        break;
      }
      case 4: {
        // sign in
        shepherd.whip("test", "jongseok");
        break;
      }
      default: {
        // stage value error
        console.log(`User Stage Error!! Stage == ${stage}`);
        break;
      }
    }
  };

  function onSuccess(res: any) {
    console.log(res);
    const user = getUserWithCredential(res.credential);
    // const userSignUpStage = user.stage
    const userSignUpStage = 0;
    moveToSignUpStage(userSignUpStage);
  }

  const onFailure = (res: any) => {
    console.log(res);
    console.log("Login Failed!! :(");
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
