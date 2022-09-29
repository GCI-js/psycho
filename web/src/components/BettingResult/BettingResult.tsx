import React, { PureComponent } from "react";
import "./BettingResult.css";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import GambleType from "../../../../server/src/type/Gamble"

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
  // data: BettingResultDataItem;
  data: GambleType.Gamble;
  userData: {
    bettingCoin: number;
    choose: number;
  }
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
    var userData = this.props.userData;
    var currentDate = new Date(data.date).getDate();
    var currentTime = Date.now();
    var remainTime = data.due - currentTime;
    // var remainTime = data.endTime - currentTime;
    var remainDateTime = new Date(remainTime);
    var hours = remainDateTime.getUTCHours();
    var minutes = remainDateTime.getUTCMinutes();
    var seconds = remainDateTime.getUTCSeconds();

    // console.log(data.endTime);
    return (
      <div className="root">
        <div>{currentDate}의 배당률</div>
        <div>{data.contents.main}</div>
        <div>
          <div className="Row">
            <div className="Column">
              <div className="Row">
                <div className="Column2">{data.contents.options[0].name}</div>
                <div>
                  {(() => {
                    if (userData.choose === 1) {
                      return <div className="Column2">{userData.bettingCoin}</div>;
                    } else {
                      return <div></div>;
                    }
                  })()}
                </div>
                {/* <betting1Coint isBet={0} bettingCoin={2500} /> */}
              </div>
              <div className="Row">{data.state[0].user_cnt}%</div>
              <div className="Row">배당률 x{data.state[0].dividend}</div>
              <div className="Row">참여자 : {data.state[0].user_cnt}</div>
            </div>
            <div className="Column">
              <div className="Row">
                <div>
                  {(() => {
                    if (userData.choose === 2) {
                      return <div className="Column2">{userData.bettingCoin}</div>;
                    } else {
                      return <div></div>;
                    }
                  })()}
                </div>
                <div className="Column2">{data.contents.options[1].name}</div>
                {/* <betting2Coint isBet={2} bettingCoin={2500} /> */}
              </div>
              <div className="Row">{data.state[1].user_cnt}%</div>
              <div className="Row">배당률 x{data.state[1].dividend}</div>
              <div className="Row">참여자 : {data.state[1].user_cnt}</div>
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
