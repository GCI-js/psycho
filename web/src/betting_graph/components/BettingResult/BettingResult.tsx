import React, { PureComponent } from "react";
import "./BettingResult.css";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import GambleType from "../../../../../common/type/Gamble";
import { BettingUtils } from "../Betting/utils";
import BettingContent from "../BettingContent/BettingContent";

const BUTTON_WIDTH = 132;
const BUTTON_HEIGHT = 40;

interface BettingResultProps {
  data: GambleType.Gamble[];
  userData: {
    bettingCoin: number;
    choose: number;
  };
}

export default class Example extends PureComponent<BettingResultProps> {
  render() {
    var data = this.props.data;
    // var userData = this.props.userData;
    // var currentTime = Date.now();
    // var remainTime = data.closeTime - currentTime;
    // var currentDate = BettingUtils.convertUTCtoDate(data.openTime);
    // var remainDateTime = new Date(remainTime);
    // var hours = remainDateTime.getUTCHours();
    // var minutes = remainDateTime.getUTCMinutes();
    // var seconds = remainDateTime.getUTCSeconds();

    // var voteRatio0 =
    //   (data.betState[0].userCnt /
    //     (data.betState[0].userCnt + data.betState[1].userCnt)) *
    //   100.0;
    // var voteRatio1 = 100 - voteRatio0;
    // var voteRatio = BettingUtils.calcVoteRatio(
    //   data.betState[0].userCnt,
    //   data.betState[1].userCnt
    // );
    // var dividend = BettingUtils.calcDividend(
    //   data.betState[0].balance,
    //   data.betState[1].balance
    // );

    // function bcomp() {
    //   return (
    //     <div className="BettingPopupComponent">
    //       <div className="button">
    //         <span>
    //           투표 시간이{" "}
    //           <span className="ColumnTextTime">
    //             <CountDownTimer
    //               hours={hours}
    //               minutes={minutes}
    //               seconds={seconds}
    //             />
    //           </span>
    //           {"  "}
    //           남았어요
    //         </span>
    //       </div>
    //     </div>
    //   );
    // }

    // function bcomp2() {
    //   return (
    //     <div className="BettingPopupComponent">
    //       <div className="button">
    //         <span>결과 확인</span>
    //       </div>
    //     </div>
    //   );
    // }

    // var comp = bcomp();
    // var comp2 = bcomp2();

    // console.log(data.endTime);
    return (
      <div className="root">
        <div>
          <BettingContent
            data={data[0]}
            // bettingTitle={currentDate + " 배당률"}
            // addtionalComponent={comp}
          />
        </div>
        <div>
          <BettingContent
            data={data[1]}
            // bettingTitle={null} //{currentDate + " 배당률"}
            // addtionalComponent={null}
          />
        </div>
      </div>
    );
  }
}
