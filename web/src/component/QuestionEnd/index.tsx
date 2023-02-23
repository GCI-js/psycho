import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionContent from "../QuestionContent";
import imgCryingFace3d from "./images/crying_face_3d.svg";

import MockQuestion from "../../../../common/mock_data/mock_questions.json";

/**
 * 모든 질문에 답을 다 했을 경우에 대한 컴포넌트
 * @returns
 */
const QuestionEnd = () => {
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

export default QuestionEnd;
