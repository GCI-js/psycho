import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionContent from "../QuestionContent";
import imgCryingFace3d from "./images/crying_face_3d.svg";

/**
 * 모든 질문에 답을 다 했을 경우에 대한 컴포넌트
 * @returns
 */
const QuestionEnd = () => {
  const [questionData, setQuestionData] = useState({
    title: "오늘의 질문",
    remained: "이번 주 질문이 N개 남았어요.",
    questionTitle: "모든 질문에 답하셨어요!",
    questionBody:
      "더 많은 질문에 답하고 싶으시다면 10 MBTI코인 을 사용하셔야 해요!",
    image: imgCryingFace3d,
    buttonLeft: "코인 결제",
    buttonRight: "기다리기",
  });

  // setQuestionData(data);
  console.log(questionData);
  return (
    <div className="">
      <QuestionContent pdata={questionData} />
    </div>
  );
};

export default QuestionEnd;
