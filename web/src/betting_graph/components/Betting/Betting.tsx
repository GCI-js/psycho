import React, { PureComponent, useState, useEffect } from "react";
import "./Betting.css";
import imgGameDie3D from "./img/game_die_3d_1.svg";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import GambleType from "../../../../../common/type/Gamble";

import { BettingUtils } from "./utils";

const BUTTON_WIDTH = 300;
const BUTTON_HEIGHT = 57;

interface BettingProps {
  data: GambleType.Gamble;
  // data: BettingDataItem;
}

export default class Example extends PureComponent<BettingProps> {
  render() {
    function showCurrentBettingPopup() {
      console.log("click showCurrentBettingPopup");
      // popup BettingPopup
    }
    function showPastResult() {
      console.log("click showPastResult");
      // redirect BettingResult
    }
    var data = this.props.data;
    var currentTime = Date.now();
    var remainTime = data.closeTime - currentTime;
    var currentDate = BettingUtils.convertUTCtoDate(data.openTime);
    var remainDateTime = new Date(remainTime);
    var hours = remainDateTime.getUTCHours();
    var minutes = remainDateTime.getUTCMinutes();
    var seconds = remainDateTime.getUTCSeconds();

    var totalCount = data.betState[0].userCnt + data.betState[1].userCnt;
    var btn1LengthPortion = Math.floor(
      Math.min(
        80.0,
        Math.max(20.0, (data.betState[0].userCnt / totalCount) * 100.0)
      )
    );
    var btn2LengthPortion = 100.0 - btn1LengthPortion;
    var btn1Length = (BUTTON_WIDTH * btn1LengthPortion) / 100;
    var btn2Length = (BUTTON_WIDTH * btn2LengthPortion) / 100;
    return (
      <div className="root" style={{ textAlign: "center" }}>
        <div className="Row">
          <div className="Column ColumnText">兩 者 擇 一</div>
          <div className="Column ColumnText2">
            <div className="Row">
              <span>
                투표 시간이{" "}
                <span className="ColumnTextTime">
                  <CountDownTimer
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                  />
                </span>
                {"  "}
                남았어요
              </span>
            </div>
            <div className="Row">
              <button className="ShowPastButton" onClick={showPastResult}>
                <span>지난 결과 보기</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={imgGameDie3D} alt="dice" />
        </div>
        <div>{currentDate}의 베팅!</div>
        <div>{data.title}</div>
        <div className="">
          <button
            className="LeftButton1"
            style={{ width: btn1Length }}
            onClick={showCurrentBettingPopup}
          >
            <span>{data.contents.options[0].name}</span>
            <br />
            <span>{btn1LengthPortion}%</span>
          </button>
          <button
            className="RightButton2"
            style={{
              width: btn2Length,
            }}
            onClick={showCurrentBettingPopup}
          >
            <span>{data.contents.options[1].name}</span>
            <br />
            <span>{btn2LengthPortion}%</span>
          </button>
        </div>
      </div>
    );
  }
}
