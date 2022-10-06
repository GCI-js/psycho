import React, { ComponentElement, PureComponent } from "react";
import "./BettingContent.css";
import GambleType from "../type/Gamble";
import { BettingUtils } from "../Betting/utils";
import BettingContent from "../BettingContent/BettingContent";

interface BettingContentProps {
  data: GambleType.Gamble;
  bettingTitle: string;
  addtionalComponent: JSX.Element;
}

export default class Example extends PureComponent<BettingContentProps> {
  render() {
    var data = this.props.data;
    var bettingTitle = this.props.bettingTitle;
    // var userData = this.props.userData;
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

    return (
      <div className="BettingContentComponent">
        <div className="BettingContentTop">{bettingTitle}</div>
        <div className="BettingContentTitle">{data.title}</div>
        <div className="BettingContentBody">
          <div className="BettingContentBodyLeft">
            <div className="BettingContentSmallTitleLeft">
              {data.contents.options[0].name}
            </div>
            <div className="BettingContentPercentLeft">
              {voteRatio.voteRatio0.toFixed(0)}%
            </div>
            <div className="BettingContentSmallSubTitleLeft">
              <div className="">배당률 x{dividend.value0}</div>
              <div className="">
                배팅금액 :{" "}
                {BettingUtils.numberWithCommas(data.state[0].balance)}
              </div>
              <div className="">
                참여자 : {BettingUtils.numberWithCommas(data.state[0].user_cnt)}{" "}
                명
              </div>
            </div>
          </div>
          <div className="BettingContentBodyRight">
            <div className="BettingContentSmallTitleRight">
              {data.contents.options[1].name}
            </div>
            <div className="BettingContentPercentRight">
              {voteRatio.voteRatio1.toFixed(0)}%
            </div>
            <div className="BettingContentSmallSubTitleRight">
              <div className="">배당률 x{dividend.value1}</div>
              <div className="">
                배팅금액 :{" "}
                {BettingUtils.numberWithCommas(data.state[1].balance)}
              </div>
              <div className="">
                참여자 : {BettingUtils.numberWithCommas(data.state[1].user_cnt)}{" "}
                명
              </div>
            </div>
          </div>
        </div>
        {this.props.addtionalComponent}

        {/* <div className="">
            <input
              className="BettingContentInputCoinButton"
              type="number"
              id=""
              placeholder="베팅할 포인트를 적어주세요."
            ></input>
          </div>
          <div className="buttonRow">
            <button className="button1">{data.contents.options[0].name}</button>
            <button className="button2">{data.contents.options[1].name}</button>
          </div> */}
      </div>
    );
  }
}
