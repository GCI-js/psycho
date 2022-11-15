import React, { useState } from "react";
import "./DeleteUser.css";
// import DropDown from "./Dropdown";
import BasicButton from "../../Common/BasicButton";
import cryFaceIcon from "../img/cryFaceIcon.png";
const DeleteUser = () => {
  const dummyUserName = "아크릴오므라이스";

  const handleDeleteUser = () => {};
  const [selectedNation, setSelectedNation] = useState("");

  const handleChangeNation = (event: any) => {
    setSelectedNation(event.target.value);
  };

  return (
    <div className="deleteUserContainer">
      <div className="deleteUserTitle">회원탈퇴</div>
      <div>
        <text className="deleteUserContent">
          <b>Psycho</b>
          에서 계정을 삭제하고 {"\n"}서비스를 <b>탈퇴</b> 하시려면 {"\n"}아래
          버튼을 눌러주세요!
        </text>
      </div>
      <text className="deleteUserSubContent">탈퇴는 되돌릴 수 없어요!</text>
      <div className="deleteUserCenter">
        <img
          src={cryFaceIcon}
          alt="cryFaceIcon"
          className="cryFaceIcon"
          onClick={() => {}}
        />

        <BasicButton content="탈퇴" pFunction={handleDeleteUser} />
      </div>
    </div>
  );
};

export default DeleteUser;
