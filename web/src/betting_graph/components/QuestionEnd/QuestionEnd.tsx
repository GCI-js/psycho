import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionButton from "../QuestionButton/QuestionButton";
import imgCryingFace3d from "./images/crying_face_3d.svg";
const QuestionEnd = () => {
  const button1 = () => {
    console.log("button1 Clicked");
  };
  const button2 = () => {
    console.log("button2 Clicked");
  };
  return (
    <div>
      <div>
        <img src={imgCryingFace3d} alt="crying_face_3d" />
      </div>
      <QuestionButton
        text1="코인 결제"
        onClick1={button1}
        text2="기다리기"
        onClick2={button2}
      />
    </div>
  );
};

export default QuestionEnd;
