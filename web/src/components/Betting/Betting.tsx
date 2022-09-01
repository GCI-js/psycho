import React, { PureComponent } from "react";
import imgGameDie3D from "./img/game_die_3d_1.svg";

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
}

interface BettingProps {
  data: BettingDataItem;
}

export default class Example extends PureComponent<BettingProps> {
  render() {
    var data = this.props.data;
    var totalCount = data.betting1Count + data.betting2Count;
    var btn1LengthPortion = Math.floor(
      Math.min(80.0, Math.max(20.0, (data.betting1Count / totalCount) * 100.0))
    );
    var btn2LengthPortion = 100.0 - btn1LengthPortion;
    var btn1Length = (BUTTON_WIDTH * btn1LengthPortion) / 100;
    var btn2Length = (BUTTON_WIDTH * btn2LengthPortion) / 100;
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <img src={imgGameDie3D} alt="dice" />
        </div>
        <div>{data.date}의 베팅!</div>
        <div>{data.content}</div>
        <div style={styles.root}>
          <button style={{ width: btn1Length, ...styles.button1 }}>
            <text>짜장면</text>
            <br />
            <text>{btn1LengthPortion}%</text>
          </button>
          <button
            style={{
              width: btn2Length,
              ...styles.button2,
            }}
          >
            <text>짬뽕</text>
            <br />
            <text>{btn2LengthPortion}%</text>
          </button>
        </div>
      </div>
    );
  }
}
