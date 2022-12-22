import React from "react";
// import "./MainButton.css";

interface IProps {
  text1: String;
  text2: String;
  onClick1: () => void;
  onClick2: () => void;
}

function QuestionButton(props: IProps) {
  return (
    <div className="Row">
      <div className="Column" onClick={props.onClick1}>
        <div className="">{props.text1}</div>
      </div>
      <div className="Column" onClick={props.onClick2}>
        <div className="">{props.text2}</div>
      </div>
    </div>
  );
}

export default QuestionButton;
