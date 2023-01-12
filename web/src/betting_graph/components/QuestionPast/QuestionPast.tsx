import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionContent from "../QuestionContent/QuestionContent";
import imgSushi3d from "./images/sushi_3d.svg";

const QuestionPast = () => {
  const [questionData, setQuestionData] = useState({
    title: "지나간 질문",
    remained: "이번 주 질문이 N개 남았어요.",
    questionTitle: "지난 토요일의 질문",
    questionBody: `국교는 인정되지 아니하며, 종교와 정치는 분리된다. 국회는 국가의 예산안을 심의·확정한다. 국가는 청원에 대하여 심사할 의무를 진다. 선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당 또는 후보자에게 부담시킬 수 없다.
    
    헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 모든 국민은 인간다운 생활을 할 권리를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다. 
    
    학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다.`,
    image: imgSushi3d,
    buttonLeft: "동의",
    buttonRight: "비동의",
  });

  // setQuestionData(data);
  console.log(questionData);
  return (
    <div className="">
      <QuestionContent pdata={questionData} />
    </div>
  );
};

export default QuestionPast;
