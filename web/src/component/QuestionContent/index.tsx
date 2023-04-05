import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionButton from "../QuestionButton";
import { Question } from "../../@types/Question";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";
import shepherd from "../../service/shepherd";

interface Props extends Properties {
  qdata: Question;
  agree: () => void;
  disagree: () => void;
}
// 질문 컴포넌트의 내용을 담당하는 컴포넌트
const QuestionContent = (properties: Props) => {
  const id = [`_${idiotproof.trace(QuestionContent)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  // 더미 버튼. 개발 필요

  const skipButtion = () => {
    shepherd.whip("test", "QuestionEnd");
  };
  return (
    <div id={id} className={cl}>
      <div className="QuestionContentPage">
        <div className="QuestionContentPageTitle LargeTitle">
          {properties.qdata.title}
        </div>
        <div className="">
          <img src={properties.qdata.image} alt="rocket3d" />
        </div>
        <div className="QuestionContentRemained">
          <div className="QuestionContentColumn">{properties.qdata.quote}</div>
          <div className="QuestionContentColumn" onClick={skipButtion}>
            skip
          </div>
        </div>
        <div className="QuestionContentQuestionTitle LargeTitle">
          {properties.qdata.title}
        </div>
        <div className="QuestionContentQuestionBody" style={{}}>
          {properties.qdata.contents.main}
        </div>
        <QuestionButton
          text1={properties.qdata.contents.options[0].name}
          onClick1={properties.agree}
          text2={properties.qdata.contents.options[1].name}
          onClick2={properties.disagree}
        />
      </div>
    </div>
  );
};

export default QuestionContent;
