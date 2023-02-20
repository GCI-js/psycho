import React, { Component, PureComponent, useState, useEffect } from "react";
import { Question } from "../../@types/Question";
import QuestionContent from "../QuestionContent";
import umbrella3d from "../../img/umbrella_3d.svg";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";

import MockQuestion from "../../../../common/mock_data/mock_questions.json";

/**
 * 오늘의 질문
 * @returns
 */
const QuestionSpecialPage = (properties: Properties) => {
  const id = [
    `_${idiotproof.trace(QuestionSpecialPage)}`,
    properties.id,
  ].join();
  const cl = [styles.index, properties.className].join(" ");
  const [questionData, setQuestionData] = useState({
    ...MockQuestion[2],
    image: umbrella3d,
  });

  const fetchData = async () => {
    // dummy 데이터가 아닌 데이터를 어디에선가 (localStorage?) 불러오기 위한 함수
  };

  return (
    <div id={id} className={cl}>
      <div>hello</div>
      <QuestionContent qdata={questionData} />
    </div>
  );
};

export default QuestionSpecialPage;
