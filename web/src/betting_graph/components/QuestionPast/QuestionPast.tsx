import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionButton from "../QuestionButton/QuestionButton";
import imgCoin3d from "./images/coin_3d.svg";
const QuestionPast = () => {
  const button1 = () => {
    console.log("button1 Clicked");
  };
  const button2 = () => {
    console.log("button2 Clicked");
  };
  return (
    <div>
      <div>
        <img src={imgCoin3d} alt="imgCoin3d" />
      </div>
      <div>지나간 질문</div>
      <div>
        지나간 질문을 답하시려면 MBTI코인 결제를 하셔야 해요! <br />
        10 MBTI코인을 사용해서 1개의 질문을 답할 수 있어요!
      </div>
      <QuestionButton
        text1="결제!"
        onClick1={button1}
        text2="기다리기"
        onClick2={button2}
      />
    </div>
  );
};

export default QuestionPast;
