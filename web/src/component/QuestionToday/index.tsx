import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionContent from "../QuestionContent";
import imgRocket3d from "./images/rocket_3d.svg";
import "./QuestionToday.css";

/**
 * 오늘의 질문
 * @returns
 */
const QuestionToday = () => {
  const [questionData, setQuestionData] = useState({
    title: "오늘의 질문",
    remained: "이번 주 질문이 N개 남았어요.",
    questionTitle: "금요일의 질문",
    questionBody:
      "이메일에 가능한 빨리 회신하려고 하고 지저분한 편지함을 참을 수 없습니다.",
    image: imgRocket3d,
    buttonLeft: "동의",
    buttonRight: "비동의",
  });

  console.log(questionData);
  return (
    <div className="">
      <QuestionContent pdata={questionData} />
    </div>
  );
};

export default QuestionToday;
