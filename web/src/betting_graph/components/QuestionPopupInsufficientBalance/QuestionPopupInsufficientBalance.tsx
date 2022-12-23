import React, { Component, PureComponent, useState, useEffect } from "react";

import QuestionButton from "../QuestionButton/QuestionButton";
import imgTroll3d from "./images/troll_3d.svg";
import RemainedBalance from "../RemainedBalance/RemainedBalance";
import MockUser from "../../../../../common/mock_data/mock_users.json";
import {
  BloodType,
  Gender,
  HashtagType,
  Mbti,
} from "../../../../../common/type/common";

const DUMMY_DATA_USER = {
  ...MockUser[0],
  balance: 0,
  bloodType: "A" as BloodType,
  gender: "male" as Gender,
};

const QuestionInsufficientBalance = () => {
  const button1 = () => {
    console.log("button1 Clicked");
  };
  const button2 = () => {
    console.log("button2 Clicked");
  };

  const toggleButton = () => {
    console.log("toggle Clicked");
    setModalStatus(!modalStatus);
    // setModalDisplay();
    console.log("modal status: " + modalStatus);
  };
  const [modalStatus, setModalStatus] = useState(false);
  const [modalDisplay, setModalDisplay] = useState("block");
  return (
    <div>
      <div className="QuestionButtonLeft" onClick={toggleButton}>
        코인 부족 토글
      </div>
      <div style={{ display: modalStatus ? "block" : "none" }}>
        <RemainedBalance data={DUMMY_DATA_USER} />
        <div className="QuestionPastPopupComponent">
          <div>
            <img src={imgTroll3d} alt="imgCoin3d" />
          </div>
          <div>잔액 부족!</div>
          <div>
            MBTI코인이 부족해요! <br />
            프로필에 태그를 더 추가하시면 추가결제 없이 MBTI코인을 받으실 수
            있어요!
          </div>
          <QuestionButton
            text1="프로필로 가기!"
            onClick1={button1}
            text2="돌아가기"
            onClick2={button2}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionInsufficientBalance;
