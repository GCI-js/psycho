import React, { PureComponent } from "react";
import "./BettingResult.css";
import CountDownTimer from "../CountDownTimer/CountDownTimer";

const BUTTON_WIDTH = 132;
const BUTTON_HEIGHT = 40;

interface BettingResultDataBettingItem {
  name: string;
  voteRatio: number;
  winRatio: number;
  totalAmount: number;
  count: number;
}

interface BettingResultDataItem {
  date: number;
  content: string;
  mbtiType: string;
  betting1: BettingResultDataBettingItem;
  betting2: BettingResultDataBettingItem;
  remainTime: string;
  endTime: number;
  bettingCoin: number;
  choose: number; // 0, 1
}

interface BettingResultProps {
  data: BettingResultDataItem;
}

interface BettingCoinProps {
  isBet: number;
  bettingCoin: number;
}

// function betting1Coint(isBet: number, bettingCoin: number) {
function betting1Coint(props: BettingCoinProps) {
  if (props.isBet === 1) {
    return <div className="Column2">{props.bettingCoin}</div>;
  }
  return <div></div>;
}
// function betting2Coint(isBet: number, bettingCoin: number) {
function betting2Coint(props: BettingCoinProps) {
  if (props.isBet === 2) {
    return <div className="Column2">{props.bettingCoin}</div>;
  }
  return <div></div>;
}

export default class Example extends PureComponent<BettingResultProps> {
  render() {
    var data = this.props.data;
    var currentTime = Date.now();
    var remainTime = data.endTime - currentTime;
    var remainDateTime = new Date(remainTime);
    var hours = remainDateTime.getUTCHours();
    var minutes = remainDateTime.getUTCMinutes();
    var seconds = remainDateTime.getUTCSeconds();
    console.log(data.endTime);
    return (
      <div className="root">
        <div>{data.date}의 배당률</div>
        <div>{data.content}</div>
        <div>
          <div className="Row">
            <div className="Column">
              <div className="Row">
                <div className="Column2">{data.betting1.name}</div>
                <div>
                  {(() => {
                    if (data.choose === 1) {
                      return <div className="Column2">{data.bettingCoin}</div>;
                    } else {
                      return <div></div>;
                    }
                  })()}
                </div>
                {/* <betting1Coint isBet={0} bettingCoin={2500} /> */}
              </div>
              <div className="Row">{data.betting1.voteRatio}%</div>
              <div className="Row">배당률 x{data.betting1.winRatio}</div>
              <div className="Row">참여자 : {data.betting1.count}</div>
            </div>
            <div className="Column">
              <div className="Row">
                <div>
                  {(() => {
                    if (data.choose === 2) {
                      return <div className="Column2">{data.bettingCoin}</div>;
                    } else {
                      return <div></div>;
                    }
                  })()}
                </div>
                <div className="Column2">{data.betting2.name}</div>
                {/* <betting2Coint isBet={2} bettingCoin={2500} /> */}
              </div>
              <div className="Row">{data.betting2.voteRatio}%</div>
              <div className="Row">배당률 x{data.betting2.winRatio}</div>
              <div className="Row">참여자 : {data.betting2.count}</div>
            </div>
          </div>
        </div>
        <div className="button">
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
      </div>
    );
  }
}
