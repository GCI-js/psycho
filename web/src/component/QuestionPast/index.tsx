import React, { Component, PureComponent, useState, useEffect } from "react";
import { Question } from "../../@types/Question";
import QuestionContent from "../QuestionContent";
import imgSushi3d from "./images/sushi_3d.svg";
import MockQuestion from "../../../../common/mock_data/mock_questions.json";

/**
 * 지나간 질문 컴포넌트
 * @returns
 */
const QuestionPast = (properties: Properties) => {
  const [questionData, setQuestionData] = useState({
    ...MockQuestion[0],
  });

  // setQuestionData(data);
  console.log(questionData);
  return (
    <div className="">
      <QuestionContent qdata={questionData} />
    </div>
  );
};

export default QuestionPast;
