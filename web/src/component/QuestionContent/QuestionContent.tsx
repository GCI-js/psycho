import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionButton from "../QuestionButton/QuestionButton";
import "./QuestionContent.css";

// 질문 컴포넌트의 내용을 담당하는 컴포넌트
const QuestionContent = ({ pdata }: any) => {
  // 더미 버튼. 개발 필요
  const button1 = () => {
    console.log("button1 Clicked");
  };
  const button2 = () => {
    console.log("button2 Clicked");
  };
  const [data, setQuestionData] = useState({
    title: pdata.title,
    remained: pdata.remained,
    questionTitle: pdata.questionTitle,
    questionBody: pdata.questionBody,
    image: pdata.image,
  });

  return (
    <div className="QuestionContentPage">
      <div className="QuestionContentPageTitle LargeTitle">{pdata.title}</div>
      <div className="">
        <img src={pdata.image} alt="rocket3d" />
      </div>
      <div className="QuestionContentRemained">
        <div className="QuestionContentColumn">{pdata.remained}</div>
        <div className="QuestionContentColumn">skip</div>
      </div>
      <div className="QuestionContentQuestionTitle LargeTitle">
        {pdata.questionTitle}
      </div>
      <div className="QuestionContentQuestionBody" style={{}}>
        {pdata.questionBody}
      </div>

      <QuestionButton
        text1={pdata.buttonLeft}
        onClick1={button1}
        text2={pdata.buttonRight}
        onClick2={button2}
      />
    </div>
  );
};

export default QuestionContent;
