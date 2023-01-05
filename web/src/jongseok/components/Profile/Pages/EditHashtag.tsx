import React, { useState } from "react";
import "./EditUserInfo.css";
// import DropDown from "./Dropdown";
import BasicButton from "../../Common/BasicButton";
const EditUserInfo = () => {
  const dummyUserName = "아크릴오므라이스";

  const handleIsEditUserInfo = () => {};
  const [selectedNation, setSelectedNation] = useState("");

  const handleChangeNation = (event: any) => {
    setSelectedNation(event.target.value);
  };

  return (
    <div className="editUserInfoContainer">
      <div className="username">{`@${dummyUserName}`}</div>
      <div className="choiceText">{`본인을 설명하는 해시태그를 적어주세요\n`}</div>

      <div className="selectBox">
        <button className="nation dropdownButton" onClick={(e) => {}}>
          해쉬태그는 43개까지 추가할 수 있어요
        </button>
      </div>

      <BasicButton
        content="프로필 수정 완료!"
        pFunction={handleIsEditUserInfo}
      />
    </div>
  );
};

export default EditUserInfo;
