import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionContent from "../QuestionContent";
import imgRocket3d from "./images/rocket_3d.svg";
import "./QuestionToday.css";
import MockQuestion from "../../../../common/mock_data/mock_questions.json";

/**
 * 오늘의 질문
 * @returns
 */
const QuestionToday = () => {
  const [questionAdditionalData, setQuestionAdditionalData] = useState({
    componentTitle: "오늘의 질문",
  });
  const [questionData, setQuestionData] = useState({
    ...MockQuestion[0],
  });

  const [buttonInfo, setButtonInfo] = useState({
    button1: "동의",
    button2: "비동의",
  });

  const [properties, setProperties] = useState({});

  console.log(questionData);
  return (
    <div className="">
      <QuestionContent qdata={questionData} />
    </div>
  );
};

export default QuestionToday;
