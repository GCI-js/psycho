import React, { useState } from "react";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";

interface IProps extends Properties {
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
const QuestionButton = (props: IProps) => {
  const id = [`_${idiotproof.trace(QuestionButton)}`, props.id].join();
  const cl = [styles.index, props.className].join(" ");

  return (
    <div id={id} className={cl}>
      <div className="QuestionButtonRow">
        <div className="QuestionButtonColumn" onClick={props.onClick1}>
          <div className="QuestionButtonLeft">{props.text1}</div>
        </div>
        <div className="QuestionButtonColumn" onClick={props.onClick2}>
          <div className="QuestionButtonRight">{props.text2}</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionButton;
