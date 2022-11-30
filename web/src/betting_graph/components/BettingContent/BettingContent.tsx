import React, {
  ComponentElement,
  MutableRefObject,
  PureComponent,
  Ref,
  useRef,
} from "react";
import "./BettingContent.css";
import GambleType from "../../../../../common/type/Gamble";
import { BettingUtils } from "../Betting/utils";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import closeButtonImage from "./img/close.svg";
import lockedWithKeyImage from "./img/locked_with_key_3d.svg";

interface BettingContentProps {
  data: GambleType.Gamble;
  bettingTitle?: string;
  addtionalComponent?: JSX.Element;
  isLocked?: boolean;
}

export default class Example extends PureComponent<BettingContentProps> {
  render() {
    var data = this.props.data;
    var isLocked = this.props.isLocked;

    // var userData = this.props.userData;
    var currentTime = Date.now();
    var remainTime = data.closeTime - currentTime;
    var currentDate = BettingUtils.convertUTCtoDate(data.openTime);
    var bettingTitle = this.props.bettingTitle
      ? this.props.bettingTitle
      : currentDate + " 배당률";
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
        <div className="BettingResultPastComponent">
          <button className="BettingResultPastRemainButton">
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
          </button>
        </div>
      );
    }

    function bcomp2() {
      return (
        <div className="BettingResultPastComponent2">
          <button className="BettingResultPastButton0">결과 확인</button>
        </div>
      );
    }
    function bcomp3() {
      var btn1LengthPortion = 58;
      var btn2LengthPortion = 42;
      return (
        <div className="BettingResultPastComponent">
          <button className="BettingResultPastButton1">
            <span>짜장면</span>
            <br />
            <span>{btn1LengthPortion}%</span>
          </button>
          <button className="BettingResultPastButton2">
            <span>짬뽕</span>
            <br />
            <span>{btn2LengthPortion}%</span>
          </button>
        </div>
      );
    }

    function closeComponent1() {
      return <span className="close">&times;</span>;
      // return <img src={closeButtonImage}></img>;
    }

    var comp = bcomp();
    var comp2 = bcomp2();
    var comp3 = bcomp3();

    var buttonComponent = this.props.addtionalComponent
      ? this.props.addtionalComponent
      : remainTime > 0
      ? comp
      : data.result.length === 0
      ? comp2
      : comp3;

    var closeComponent = this.props.addtionalComponent
      ? closeComponent1()
      : null;
    const lockedRef = useRef() as MutableRefObject<HTMLDivElement>;

    function lockedComponent1() {
      lockedRef!.current.blur();
      return (
        <div>
          <img src={lockedWithKeyImage} alt="locked_with_key"></img>
        </div>
      );
    }
    var lockedComponent = isLocked ? lockedComponent1() : "";

    return (
      <div className="BettingContentComponent">
        <div ref={lockedRef}>
          <div className="BettingContentTop">
            {bettingTitle} {closeComponent}
          </div>
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
                  {BettingUtils.numberWithCommas(data.betState[0].balance)}
                </div>
                <div className="">
                  참여자 :{" "}
                  {BettingUtils.numberWithCommas(data.betState[0].userCnt)} 명
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
                  {BettingUtils.numberWithCommas(data.betState[1].balance)}
                </div>
                <div className="">
                  참여자 :{" "}
                  {BettingUtils.numberWithCommas(data.betState[1].userCnt)} 명
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>{lockedComponent}</div>
        {/* {this.props.addtionalComponent} */}
        {buttonComponent}
      </div>
    );
  }
}
