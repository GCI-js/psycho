import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionContent from "../QuestionContent/QuestionContent";
import umbrella3d from "../../img/umbrella_3d.svg";
import styles from "./index.module.scss";

/**
 * 오늘의 질문
 * @returns
 */
const QuestionSpecialPage = () => {
  const [questionData, setQuestionData] = useState({
    title: "스페셜 질문",
    remained: "8월의 스페셜 진문이에요!",
    questionTitle: "8월의 스페셜 질문",
    questionBody:
      "이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다.",
    image: umbrella3d,
    buttonLeft: "A",
    buttonRight: "B",
  });

  return (
    <div className="">
      <QuestionContent pdata={questionData} />
    </div>
  );
};

export default QuestionSpecialPage;
