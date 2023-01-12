import React, { useState } from "react";
import "./Withdrawl.css";
// import DropDown from "./Dropdown";
import BasicButton from "../../Common/BasicButton";
import cryFaceIcon from "../img/cryFaceIcon.png";
/*
[2022.01.12 jongseok lee] 
컴포넌트들 배열만 되어있습니다. CSS 수정해야 합니다 !
*/
const Withdrawal = () => {
  const dummyUserName = "아크릴오므라이스";

  const handleWithdrawal = () => {};
  const [selectedNation, setSelectedNation] = useState("");

  return (
    <div className="withdrawalContainer">
      <div className="withdrawalTitle">회원탈퇴</div>
      <div>
        <text className="withdrawalContent">
          <b>Psycho</b>
          에서 계정을 삭제하고 {"\n"}서비스를 <b>탈퇴</b> 하시려면 {"\n"}아래
          버튼을 눌러주세요!
        </text>
      </div>
      <text className="withdrawalSubContent">탈퇴는 되돌릴 수 없어요!</text>
      <div className="withdrawalCenter">
        <img
          src={cryFaceIcon}
          alt="cryFaceIcon"
          className="cryFaceIcon"
          onClick={() => {}}
        />

        <BasicButton content="탈퇴" pFunction={handleWithdrawal} />
      </div>
    </div>
  );
};

export default Withdrawal;
