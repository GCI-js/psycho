import React, { PureComponent } from "react";

const BUTTON_WIDTH = 132;
const BUTTON_HEIGHT = 40;
const styles = {
  root: {
    // display: "flex",
    justifyContent: "center",
    // height: BUTTON_HEIGHT,
    width: "75%",
    margin: "auto",
  },

  center: {
    display: "inline-block",
    margin: "0 auto",
  },

  button1: {
    // display: "flex",
    backgroundColor: "#FF9574",
    borderRadius: "100px",
    border: "none",
    color: "#FFFFFF",
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    // float: "left",
  },
  button2: {
    // display: "flex",
    backgroundColor: "#FF7070",
    borderRadius: "100px",
    border: "none",
    color: "#FFFFFF",
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    // float: "right",
  },

  Row: {
    display: "table",
    width: "100%" /*Optional*/,
    // tableLayout: "fixed" /*Optional*/,
    // borderSpacing: "10px" /*Optional*/,
  },
  Column: {
    display: "table-cell",
    backgroundColor: "#FFFFFF" /*Optional*/,
  },
};

interface BettingPopupDataItem {
  date: number;
  content: string;
  mbtiType: string;
  betting1: {
    name: string;
    voteRatio: number;
    winRatio: number;
    count: number;
  };
  betting2: {
    name: string;
    voteRatio: number;
    winRatio: number;
    count: number;
  };
}

interface BettingPopupProps {
  data: BettingPopupDataItem;
}

export default class Example extends PureComponent<BettingPopupProps> {
  render() {
    var data = this.props.data;
    return (
      <div style={styles.root}>
        <div>현재 배당률</div>
        <div>{data.content}</div>
        <div>
          <div style={styles.Row}>
            <div style={styles.Column}>
              <div style={styles.Row}>{data.betting1.name}</div>
              <div style={styles.Row}>{data.betting1.voteRatio}%</div>
              <div style={styles.Row}>배당률 x{data.betting1.winRatio}</div>
              <div style={styles.Row}>참여자 : {data.betting1.count}</div>
            </div>
            <div style={styles.Column}>
              <div style={styles.Row}>{data.betting2.name}</div>
              <div style={styles.Row}>{data.betting2.voteRatio}%</div>
              <div style={styles.Row}>배당률 x{data.betting2.winRatio}</div>
              <div style={styles.Row}>참여자 : {data.betting2.count}</div>
            </div>
          </div>
        </div>
        <div>
          <input
            type="number"
            id=""
            placeholder="베팅할 포인트를 적어주세요."
            style={{ width: "275px" }}
          ></input>
        </div>
        <div style={{ width: "100%", height: "50px" }}>
          <button style={{ float: "left", ...styles.button1 }}>
            {data.betting1.name}
          </button>
          <button style={{ float: "right", ...styles.button2 }}>
            {data.betting2.name}
          </button>
        </div>
      </div>
    );
  }
}
