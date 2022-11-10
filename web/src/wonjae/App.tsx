import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage/SignInPage";
import KakaoRedirect from "./components/SignInPage/KaKaoRedirect";
import NaverRedirect from "./components/SignInPage/NaverRedirect";
import WelcomePage from "./components/SignInPage/WelcomePage";
import SignUpPage1 from "./components/SingUp/SignUpPage1";

function Wonjae() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/signIn" element={<SignInPage />}></Route>
          <Route path="/kakaoLogin" element={<KakaoRedirect />}></Route>
          <Route path="/naverLogin" element={<NaverRedirect />}></Route>
          <Route path="/signUp1" element={<SignUpPage1 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Wonjae;
