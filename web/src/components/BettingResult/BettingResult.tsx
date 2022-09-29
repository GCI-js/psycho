import React, { PureComponent } from "react";
import "./BettingResult.css";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import GambleType from "../../../../server/src/type/Gamble";
import { BettingUtils } from "../Betting/utils";

const BUTTON_WIDTH = 132;
const BUTTON_HEIGHT = 40;

interface BettingResultProps {
  data: GambleType.Gamble;
  userData: {
    bettingCoin: number;
    choose: number;
  };
}

export default class Example extends PureComponent<BettingResultProps> {
  render() {
    var data = this.props.data;
    var userData = this.props.userData;
    var currentTime = Date.now();
    var remainTime = data.due - currentTime;
    var currentDate = BettingUtils.convertUTCtoDate(data.date);
    var remainDateTime = new Date(remainTime);
    var hours = remainDateTime.getUTCHours();
    var minutes = remainDateTime.getUTCMinutes();
    var seconds = remainDateTime.getUTCSeconds();

    var voteRatio0 =
      (data.state[0].user_cnt /
        (data.state[0].user_cnt + data.state[1].user_cnt)) *
      100.0;
    var voteRatio1 = 100 - voteRatio0;
    var voteRatio = BettingUtils.calcVoteRatio(
      data.state[0].user_cnt,
      data.state[1].user_cnt
    );
    var dividend = BettingUtils.calcDividend(
      data.state[0].balance,
      data.state[1].balance
    );

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
