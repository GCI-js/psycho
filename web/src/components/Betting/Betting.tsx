import React, { PureComponent, useState, useEffect } from "react";
import "./Betting.css";
import imgGameDie3D from "./img/game_die_3d_1.svg";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import GambleType from "../../../type/Gamble";
import { BettingUtils } from "./utils";

const BUTTON_WIDTH = 300;
const BUTTON_HEIGHT = 57;
const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    height: BUTTON_HEIGHT,
  },

  button1: {
    // display: "flex",
    backgroundColor: "#FF9574",
    borderRadius: "100px 0px 0px 100px",
    border: "none",
    color: "#FFFFFF",
    height: "57px",
  },
  button2: {
    // display: "flex",
    backgroundColor: "#FF7070",
    borderRadius: "0px 100px 100px 0px",
    border: "none",
    color: "#FFFFFF",
    height: "57px",
  },
};

interface BettingDataItem {
  date: number;
  content: string;
  mbtiType: string;
  betting1Count: number;
  betting2Count: number;
  endTime: number;
}

interface BettingProps {
  data: GambleType.Gamble;
  // data: BettingDataItem;
}

export default class Example extends PureComponent<BettingProps> {
  render() {
    var data = this.props.data;
    var currentTime = Date.now();
    var remainTime = data.due - currentTime;
    var currentDate = BettingUtils.convertUTCtoDate(data.date);
    var remainDateTime = new Date(remainTime);
    var hours = remainDateTime.getUTCHours();
    var minutes = remainDateTime.getUTCMinutes();
    var seconds = remainDateTime.getUTCSeconds();

    var totalCount = data.state[0].user_cnt + data.state[1].user_cnt;
    var btn1LengthPortion = Math.floor(
      Math.min(
        80.0,
        Math.max(20.0, (data.state[0].user_cnt / totalCount) * 100.0)
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
              <a style={{ fontWeight: "bold" }}>지난 결과 보기</a>
            </div>
          </div>
        </div>
        <div>
          <img src={imgGameDie3D} alt="dice" />
        </div>
        <div>{currentDate}의 베팅!</div>
        <div>{data.title}</div>
        <div style={styles.root}>
          <button style={{ width: btn1Length, ...styles.button1 }}>
            <span>짜장면</span>
            <br />
            <span>{btn1LengthPortion}%</span>
          </button>
          <button
            style={{
              width: btn2Length,
              ...styles.button2,
            }}
          >
            <span>짬뽕</span>
            <br />
            <span>{btn2LengthPortion}%</span>
          </button>
        </div>
      </div>
    );
  }
}
