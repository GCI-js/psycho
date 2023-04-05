import React, { Component, PureComponent, useState, useEffect } from "react";
import { Question } from "../../@types/Question";
import QuestionContent from "../QuestionContent";
import imgSushi3d from "./images/sushi_3d.svg";
import MockQuestion from "../../../../common/mock_data/mock_questions.json";
import shepherd from "../../service/shepherd";

/**
 * 지나간 질문 컴포넌트
 * @returns
 */
const QuestionPast = (properties: Properties) => {
  const [questionData, setQuestionData] = useState({
    ...MockQuestion[0],
    image: imgSushi3d,
  });
  const agreeButtion = () => {
    shepherd.whip("test", "QuestionEnd");
  };
  const disagreeButtion = () => {
    shepherd.whip("test", "QuestionEnd");
  };
  // setQuestionData(data);
  console.log(questionData);
  return (
    <div className="">
      <QuestionContent
        qdata={questionData}
        agree={agreeButtion}
        disagree={disagreeButtion}
      />
    </div>
  );
};

export default QuestionPast;
