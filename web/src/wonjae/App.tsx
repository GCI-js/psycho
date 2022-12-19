import React from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage/SignInPage";
import KakaoRedirect from "./components/SignInPage/KaKaoRedirect";
import NaverRedirect from "./components/SignInPage/NaverRedirect";
import WelcomePage from "./components/SignInPage/WelcomePage";
import SignUpPage1 from "./components/SingUp/SignUpPage1";
import SignUpPage2 from "./components/SingUp/SignUpPage2";
import SignUpPage3 from "./components/SingUp/SignUpPage3";
import Lamb from "../seoha/component/Lamb";
import shepherd from "../seoha/service/shepherd";
import SignUpPage4 from "./components/SingUp/SignUpPage4";

function Wonjae() {
  React.useEffect(
    () => window.addEventListener("popstate", shepherd.bleat),
    []
  );
  shepherd.whip("wonjae", "welcome");
  return (
    <div className="App">
      <Lamb data-lamb="wonjae">
        <WelcomePage data-pose="welcome" />
        <SignInPage data-pose="signIn" />
        <KakaoRedirect data-pose="kakaoLogin" />
        <NaverRedirect data-pose="naverLogin" />
        <SignUpPage1 data-pose="signUp1" />
        <SignUpPage2 data-pose="signUp2" />
        <SignUpPage3 data-pose="signUp3" />
        <SignUpPage4 data-pose="signUp4" />
      </Lamb>
      {/* Using react-router-dom */}
      {/* <BrowserRouter> 
        <Routes>
          <Route path="/" element={<SignUpPage1 />}></Route>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/signIn" element={<SignInPage />}></Route>
          <Route path="/kakaoLogin" element={<KakaoRedirect />}></Route>
          <Route path="/naverLogin" element={<NaverRedirect />}></Route>
          <Route path="/signUp1" element={<SignUpPage1 />}></Route>
          <Route path="/signUp2" element={<SignUpPage2 />}></Route>
          <Route path="/signUp3" element={<SignUpPage3 />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default Wonjae;
