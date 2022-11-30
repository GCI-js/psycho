import React, { PureComponent } from "react";
import "./RemainedBalance.css";
import imgMoneyBag3d from "./img/money_bag_3d_1.svg";
import UserType from "../../../../../common/type/User";

const BUTTON_WIDTH = 132;
const BUTTON_HEIGHT = 40;

interface RemainedBalanceProps {
  data: UserType.User;
}

export default class Example extends PureComponent<RemainedBalanceProps> {
  render() {
    var data = this.props.data;
    return (
      <div className="Balance">
        <div className="RowBalance">
          <div className="ColumnBalance">
            <img src={imgMoneyBag3d} alt="dice" />
          </div>
          <div className="ColumnBalance">
            <p>지갑에 {data.balance} MBTI 코인이 남아 있어요!</p>
          </div>
        </div>
      </div>
    );
  }
}
