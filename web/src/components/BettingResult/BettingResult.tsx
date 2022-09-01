import React, { PureComponent } from "react";

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
    borderRadius: "100px",
    border: "none",
    color: "#FFFFFF",
    height: "57px",
  },
  button2: {
    // display: "flex",
    backgroundColor: "#FF7070",
    borderRadius: "100px",
    border: "none",
    color: "#FFFFFF",
    height: "57px",
  },
};

interface BettingResultDataItem {
  date: number;
  content: string;
  mbtiType: string;
  betting1Count: number;
  betting1Ratio: number;
  betting2Count: number;
  betting2Ratio: number;
}

interface BettingResultProps {
  data: BettingResultDataItem;
}

export default class Example extends PureComponent<BettingResultProps> {
  render() {
    return (
      <div>
        <div>제목</div>
        <div>질문</div>
        <div>내용</div>
        <div>포인트</div>
        <div>버튼</div>
      </div>
    );
  }
}
