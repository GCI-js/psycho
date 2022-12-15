import React, { Component, PureComponent, useState, useEffect } from "react";

import QuestionButton from "../QuestionButton/QuestionButton";
import imgTroll3d from "./images/troll_3d.svg";
const QuestionInsufficientBalance = () => {
  const button1 = () => {
    console.log("button1 Clicked");
  };
  const button2 = () => {
    console.log("button2 Clicked");
  };
  return (
    <div>
      <div>
        <img src={imgTroll3d} alt="imgTroll3d" />
      </div>
      <div>잔액 부족!</div>
      <div>
        MBTI코인이 부족해요! <br />
        프로필에 태그를 더 추가하시면 추가결제 없이 MBTI코인을 받으실 수 있어요!
      </div>
      <QuestionButton
        text1="프로필로 결제!"
        onClick1={button1}
        text2="돌아가기"
        onClick2={button2}
      />
    </div>
  );
};

export default QuestionInsufficientBalance;
