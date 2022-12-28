import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionButton from "../QuestionButton/QuestionButton";
import imgRocket3d from "./images/rocket_3d.svg";

const QuestionToday = () => {
  const button1 = () => {
    console.log("button1 Clicked");
  };
  const button2 = () => {
    console.log("button2 Clicked");
  };
  return (
    <div>
      <div className="QuestionPageTitle">오늘의 질문</div>
      <div>
        <img src={imgRocket3d} alt="rocket3d" />
      </div>
      <div>이번주 질문이 N개 남았어요. skip</div>
      <div>금요일의 질문</div>
      <div>
        이메일에 가능한 빨리 회신하려고 하고 지저분한 편지함을 참을 수 없습니다.
      </div>

      <QuestionButton
        text1="동의"
        onClick1={button1}
        text2="비동의"
        onClick2={button2}
      />
    </div>
  );
};

export default QuestionToday;
