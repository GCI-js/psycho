import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionButton from "../QuestionButton/QuestionButton";
import imgCoin3d from "./images/coin_3d.svg";
import MockUser from "../../../../../common/mock_data/mock_users.json";
import { BloodType, Gender } from "../../../../../common/type/common";
import "./QuestionPopupPast.css";

const DUMMY_DATA_USER = {
  ...MockUser[0],
  bloodType: "A" as BloodType,
  gender: "male" as Gender,
};

/**
 * 지난 질문
 * @returns
 */
const QuestionPopupPast = () => {
  // 더미 버튼
  const button1 = () => {
    console.log("button1 Clicked");
  };
  const button2 = () => {
    console.log("button2 Clicked");
  };

  // 토글 더미 버튼, 누르면 등장하도록 동작
  const toggleButton = () => {
    console.log("toggle Clicked");
    setModalStatus(!modalStatus);
    console.log("modal status: " + modalStatus);
  };
  const [modalStatus, setModalStatus] = useState(false);
  const [modalDisplay, setModalDisplay] = useState("block");
  return (
    <div>
      <div className="QuestionButtonLeft" onClick={toggleButton}>
        추가 결제 토글
      </div>
      <div style={{ display: modalStatus ? "block" : "none" }}>
        <div className="QuestionPastPopupComponent">
          <div>
            <img src={imgCoin3d} alt="imgCoin3d" />
          </div>
          <div>지나간 질문</div>
          <div>
            지나간 질문을 답하시려면 MBTI코인 결제를 하셔야 해요! <br />
            10 MBTI코인을 사용해서 1개의 질문을 답할 수 있어요!
          </div>
          <QuestionButton
            text1="결제!"
            onClick1={button1}
            text2="기다리기"
            onClick2={button2}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionPopupPast;
