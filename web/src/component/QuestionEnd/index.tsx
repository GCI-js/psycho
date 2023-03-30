import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionContent from "../QuestionContent";
import imgCryingFace3d from "./images/crying_face_3d.svg";
import styles from "./index.module.scss";
import MockQuestion from "../../../../common/mock_data/mock_questions.json";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import QuestionButton from "../QuestionButton";

/**
 * 모든 질문에 답을 다 했을 경우에 대한 컴포넌트
 * @returns
 */
const QuestionEnd = (properties: Properties) => {
  const [questionData, setQuestionData] = useState({
    ...MockQuestion[0],
    image: imgCryingFace3d,
  });

  const agreeButtion = () => {
    shepherd.whip("test", "QuestionPast");
  };
  const disagreeButtion = () => {
    shepherd.whip("test", "QuestionPast");
  };
  // setQuestionData(data);
  console.log(questionData);
  const id = [`_${idiotproof.trace(QuestionContent)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  // 더미 버튼. 개발 필요
  return (
    <div id={id} className={cl}>
      <div className="QuestionContentPage">
        <div className="QuestionContentPageTitle LargeTitle">
          {questionData.title}
        </div>
        <div className="">
          <img src={questionData.image} alt="rocket3d" />
        </div>
        <div className="QuestionContentRemained">
          <div className="QuestionContentColumn">{questionData.quote}</div>
          <div className="QuestionContentColumn">skip</div>
        </div>
        <div className="QuestionContentQuestionTitle LargeTitle">
          {questionData.title}
        </div>
        <div className="QuestionContentQuestionBody" style={{}}>
          {questionData.contents.main}
        </div>
        <QuestionButton
          text1={questionData.contents.options[0].name}
          onClick1={agreeButtion}
          text2={questionData.contents.options[1].name}
          onClick2={disagreeButtion}
        />
      </div>
    </div>
  );
};

export default QuestionEnd;
