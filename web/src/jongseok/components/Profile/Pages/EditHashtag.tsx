import React, { useState } from "react";
import "./EditUserInfo.css";
// import DropDown from "./Dropdown";
import BasicButton from "../../Common/BasicButton";
import Hashtag, { HashtagItem } from "../Elements/Hashtag";
interface HashtagItems extends Array<HashtagItem> {}
const EditUserInfo = () => {
  const dummyUserName = "아크릴오므라이스";

  const handleIsEditUserInfo = () => {};
  const [selectedNation, setSelectedNation] = useState("");

  const handleChangeNation = (event: any) => {
    setSelectedNation(event.target.value);
  };
  let dummyNationHashtags: HashtagItems = [
    { content: "고기구이", color: "orange" },
    { content: "과자", color: "orange" },
    { content: "사자", color: "orange" },
    { content: "설거지", color: "orange" },
  ];
  let dummyHighschoolHashtags: HashtagItems = [
    { content: "고등어", color: "lime" },
    { content: "고양이", color: "lime" },
  ];

  return (
    <div className="editUserInfoContainer">
      <div className="username">{`@${dummyUserName}`}</div>
      <div className="choiceText">{`본인을 설명하는 해시태그를 적어주세요\n`}</div>

      <div className="hashtagContainer">
        <button className="hashtagTitle" onClick={(e) => {}}>
          해쉬태그는 43개까지 추가할 수 있어요
          <div className="hashtagLists">
            {dummyNationHashtags.map((el) => {
              return <Hashtag content={el.content} color={el.color} />;
            })}
          </div>
          <div className="hashtagLists">
            {dummyHighschoolHashtags.map((el) => {
              return <Hashtag content={el.content} color={el.color} />;
            })}
          </div>
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
