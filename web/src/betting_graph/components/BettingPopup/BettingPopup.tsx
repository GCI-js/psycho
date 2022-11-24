import React, { PureComponent } from "react";
import "./BettingPopup.css";
import GambleType from "../../../../../common/type/Gamble";
import { BettingUtils } from "../Betting/utils";
import BettingContent from "../BettingContent/BettingContent";

interface BettingPopupProps {
  data: GambleType.Gamble;
}

export default class Example extends PureComponent<BettingPopupProps> {
  render() {
    var data = this.props.data;
    // var userData = this.props.userData;
    var currentTime = Date.now();
    var remainTime = data.closeTime - currentTime;
    var currentDate = BettingUtils.convertUTCtoDate(data.openTime);
    var remainDateTime = new Date(remainTime);
    var hours = remainDateTime.getUTCHours();
    var minutes = remainDateTime.getUTCMinutes();
    var seconds = remainDateTime.getUTCSeconds();

    var voteRatio0 =
      (data.betState[0].userCnt /
        (data.betState[0].userCnt + data.betState[1].userCnt)) *
      100.0;
    var voteRatio1 = 100 - voteRatio0;
    var voteRatio = BettingUtils.calcVoteRatio(
      data.betState[0].userCnt,
      data.betState[1].userCnt
    );
    var dividend = BettingUtils.calcDividend(
      data.betState[0].balance,
      data.betState[1].balance
    );

    function bcomp() {
      return (
        <div>
          <div className="">
            <input
              className="BettingPopupInputCoinButton"
              type="number"
              id=""
              placeholder="베팅할 포인트를 적어주세요."
            ></input>
          </div>
          <div className="buttonRow">
            <button className="button1">{data.contents.options[0].name}</button>
            <button className="button2">{data.contents.options[1].name}</button>
          </div>
        </div>
      );
    }

    var comp = bcomp();

    return (
      <div className="rootBettingPopup">
        <div className="BettingPopupComponent">
          <BettingContent
            data={data}
            bettingTitle="현재 배당률"
            addtionalComponent={comp}
          />
          {/* <div className="BettingPopupTop">현재 배당률</div>
          <div className="BettingPopupTitle">{data.title}</div>
          <div className="BettingPopupBody">
            <div className="BettingPopupBodyLeft">
              <div className="BettingPopupSmallTitleLeft">
                {data.contents.options[0].name}
              </div>
              <div className="BettingPopupPercentLeft">
                {voteRatio.voteRatio0.toFixed(0)}%
              </div>
              <div className="BettingPopupSmallSubTitleLeft">
                <div className="">배당률 x{dividend.value0}</div>
                <div className="">배팅금액 : {data.betState[0].balance}</div>
                <div className="">참여자 : {data.betState[0].userCnt}</div>
              </div>
            </div>
            <div className="BettingPopupBodyRight">
              <div className="BettingPopupSmallTitleRight">
                {data.contents.options[1].name}
              </div>
              <div className="BettingPopupPercentRight">
                {voteRatio.voteRatio1.toFixed(0)}%
              </div>
              <div className="BettingPopupSmallSubTitleRight">
                <div className="">배당률 x{dividend.value1}</div>
                <div className="">배팅금액 : {data.betState[1].balance}</div>
                <div className="">참여자 : {data.betState[1].userCnt}</div>
              </div>
            </div>
          </div> */}

          {/* <div className="">
            <input
              className="BettingPopupInputCoinButton"
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
      </div>
    );
  }
}
