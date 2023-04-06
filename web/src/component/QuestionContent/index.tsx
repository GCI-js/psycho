import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionButton from "../QuestionButton";
import { Question } from "../../@types/Question";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";
import shepherd from "../../service/shepherd";
import img from "../../resource/emoji/cup_with_straw_3d.png";

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
          {"오늘의 질문"}
        </div>
        <div className="">
          <img src={img} alt="rocket3d" />
        </div>
        <div className="QuestionContentRemained">
          <div className="QuestionContentColumn">
            {"오늘의 질문이 N개 남았어요"}
          </div>
          <div className="QuestionContentColumn" onClick={skipButtion}>
            skip
          </div>
        </div>
        <div className="QuestionContentQuestionTitle LargeTitle">
          {"N번째 질문(1/5)"}
        </div>
        <div className="QuestionContentQuestionBody" style={{}}>
          {properties.qdata.context}
        </div>
        <QuestionButton
          text1={"그렇다"}
          onClick1={properties.agree}
          text2={"아니다"}
          onClick2={properties.disagree}
        />
      </div>
    </div>
  );
};

export default QuestionContent;
