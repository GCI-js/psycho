import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionContent from "../QuestionContent";
import imgCryingFace3d from "./images/crying_face_3d.svg";
import styles from "./index.module.scss";
import MockQuestion from "../../../../unused/common/mock_data/mock_questions.json";
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

  const againButtion = () => {
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
        <div className="QuestionContentPageTitle LargeTitle">오늘의 질문</div>
        <div className="QuestionContentPageImg">
          <img
            src={imgCryingFace3d}
            width="250px"
            height="250px"
            alt="rocket3d"
          />
        </div>
        <div className="QuestionContentQuestionTitle LargeTitle">
          모든 질문에<br></br>답하셨어요!
        </div>
      </div>
    </div>
  );
};

export default QuestionEnd;
