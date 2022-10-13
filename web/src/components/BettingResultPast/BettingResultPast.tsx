import React, { PureComponent } from "react";
import "./BettingResultPast.css";

const BUTTON_WIDTH = 132;
const BUTTON_HEIGHT = 40;

interface BettingResultPastDataItem {
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
  remainTime: string;
}

interface BettingResultPastProps {
  data: BettingResultPastDataItem;
}

export default class Example extends PureComponent<BettingResultPastProps> {
  render() {
    var data = this.props.data;
    return (
      <div className="root">
        <div>{data.date}의 결과</div>
        <div>{data.content}</div>
        <div>
          <div className="Row">
            <div className="Column">
              <div className="Row">{data.betting1.name}</div>
              <div className="Row">{data.betting1.voteRatio}%</div>
              <div className="Row">배당률 x{data.betting1.winRatio}</div>
              <div className="Row">참여자 : {data.betting1.count}</div>
            </div>
            <div className="Column">
              <div className="Row">{data.betting2.name}</div>
              <div className="Row">{data.betting2.voteRatio}%</div>
              <div className="Row">배당률 x{data.betting2.winRatio}</div>
              <div className="Row">참여자 : {data.betting2.count}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
