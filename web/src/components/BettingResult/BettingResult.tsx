import React, { PureComponent } from "react";
import "./BettingResult.css";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import GambleType from "../../../../server/src/type/Gamble"

const BUTTON_WIDTH = 132;
const BUTTON_HEIGHT = 40;

interface BettingResultProps {
  data: GambleType.Gamble;
  userData: {
    bettingCoin: number;
    choose: number;
  };
}

function convertUTCtoDate(date: number) {
  var year = new Date(date).getUTCFullYear();
  var month = new Date(date).getUTCMonth() + 1;
  var date = new Date(date).getUTCDate();
  var currentDate = month.toString() + "월" + date.toString() + "일";

  return currentDate;
}

function calcVoteRatio(userCnt0: number, userCnt1: number) {
  var voteRatio0 = (userCnt0 / (userCnt0 + userCnt1)) * 100.0;
  var voteRatio1 = 100 - voteRatio0;

  return { voteRatio0, voteRatio1 };
}

function calcDividend(balance0: number, balance1: number) {
  var sum = balance0 + balance1;
  var v0 = sum / balance0;
  var v1 = sum / balance1;
  var value0 = fixDecimalPrecision(v0, 2);
  var value1 = fixDecimalPrecision(v1, 2);
  return { value0, value1 };
}

function fixDecimalPrecision(decimal: number, precision: number) {
  return decimal.toFixed(precision);
}

export default class Example extends PureComponent<BettingResultProps> {
  render() {
    var data = this.props.data;
    var userData = this.props.userData;
    var currentTime = Date.now();
    var remainTime = data.due - currentTime;
    var currentDate = convertUTCtoDate(data.date);
    var remainDateTime = new Date(remainTime);
    var hours = remainDateTime.getUTCHours();
    var minutes = remainDateTime.getUTCMinutes();
    var seconds = remainDateTime.getUTCSeconds();

    var voteRatio0 =
      (data.state[0].user_cnt /
        (data.state[0].user_cnt + data.state[1].user_cnt)) *
      100.0;
    var voteRatio1 = 100 - voteRatio0;
    var voteRatio = calcVoteRatio(
      data.state[0].user_cnt,
      data.state[1].user_cnt
    );
    var dividend = calcDividend(data.state[0].balance, data.state[1].balance);
    // console.log(data.endTime);
    return (
      <div className="root">
        <div>{currentDate}의 배당률</div>
        <div>{data.title}</div>
        <div>
          <div className="Row">
            <div className="Column">
              <div className="Row">
                <div className="Column2">{data.contents.options[0].name}</div>
                <div>
                  {(() => {
                    if (userData.choose === 1) {
                      return (
                        <div className="Column2">{userData.bettingCoin}</div>
                      );
                    } else {
                      return <div></div>;
                    }
                  })()}
                </div>
              </div>
              <div className="Row">{voteRatio.voteRatio0.toFixed(0)}%</div>
              <div className="Row">배당률 x{dividend.value0}</div>
              <div className="Row">배팅금액 : {data.state[0].balance}</div>
              <div className="Row">참여자 : {data.state[0].user_cnt}</div>
            </div>
            <div className="Column">
              <div className="Row">
                <div>
                  {(() => {
                    if (userData.choose === 2) {
                      return (
                        <div className="Column2">{userData.bettingCoin}</div>
                      );
                    } else {
                      return <div></div>;
                    }
                  })()}
                </div>
                <div className="Column2">{data.contents.options[1].name}</div>
              </div>
              <div className="Row">{voteRatio.voteRatio1.toFixed(0)}%</div>
              <div className="Row">배당률 x{dividend.value1}</div>
              <div className="Row">배팅금액 : {data.state[1].balance}</div>
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
