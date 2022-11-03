import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage/SignInPage";
import KakaoRedirect from "./components/SignInPage/KaKaoRedirect";
import NaverRedirect from "./components/SignInPage/NaverRedirect";

function Wonjae() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />}></Route>
          <Route path="/kakaoLogin" element={<KakaoRedirect />}></Route>
          <Route path="/naverLogin" element={<NaverRedirect />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Wonjae;
