import React from "react";
import "./QuestionButton.css";

interface IProps {
  text1: String;
  text2: String;
  onClick1: () => void;
  onClick2: () => void;
}

/**
 * 질문 버튼 함수
 * @param props
 * @returns
 */
function QuestionButton(props: IProps) {
  return (
    <div className="QuestionButtonRow">
      <div className="QuestionButtonColumn" onClick={props.onClick1}>
        <div className="QuestionButtonLeft">{props.text1}</div>
      </div>
      <div className="QuestionButtonColumn" onClick={props.onClick2}>
        <div className="QuestionButtonRight">{props.text2}</div>
      </div>
    </div>
  );
}

export default QuestionButton;
