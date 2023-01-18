import React from "react";
import Hashtag, { HashtagItem } from "../Hashtag/Hashtag";
import "./HashtagList.css";
interface HashtagItems extends Array<HashtagItem> {}

/*
[2022.01.12 jongseok lee] 
Hashtag List를 관리하는 component입니다.
*/
const HashtagList = () => {
  let dummyNationHashtags: HashtagItems = [
    { content: "대한민국", color: "orange" },
    { content: "수지구", color: "orange" },
  ];
  let dummyHighschoolHashtags: HashtagItems = [
    { content: "경기고", color: "lime" },
    { content: "수지고", color: "lime" },
  ];

  return (
    <div className="hashtagContainer">
      <div className="hashtagTitle">내가 선택한 #해시태그</div>
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
    </div>
  );
};

export default HashtagList;
