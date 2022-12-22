import * as React from "react";
import "./TopHashtag.css";

export type hashtag = { hashtag_id: string; name: string }[];

const hashtagList: hashtag = [
  { hashtag_id: "123", name: "배고파" },
  { hashtag_id: "123", name: "돈내놔" },
  { hashtag_id: "123", name: "애플1" },
  { hashtag_id: "123", name: "애플2" },
  { hashtag_id: "123", name: "일하기싫어" },
  { hashtag_id: "123", name: "스파크플러스" },
  { hashtag_id: "123", name: "집" },
  { hashtag_id: "123", name: "안녕" },
];
const hashtagFirst = hashtagList.slice(0, 4);
const hashtagSecond = hashtagList.slice(4, 8);
const TopHashtag = () => {
  return (
    <div>
      <div className="tophashtag_card_item">
        <div className="tophashtag_card_header">실시간 TOP 8 해쉬태그</div>

        <div className="tophashtag_card_tag">
          {hashtagFirst.map(function (i, index): JSX.Element {
            // console.log("I.........", i);

            return (
              <div className="tophashtag_hashtag">
                <span>#{i.name} </span>
              </div>
            );
          })}
          {/* <a href={props.url}>#{props.hashtag}</a> */}
        </div>
        <div className="tophashtag_card_tag">
          {hashtagSecond.map(function (i, index): JSX.Element {
            // console.log("I.........", i);

            return (
              <div className="tophashtag_hashtag">
                <span>#{i.name} </span>
              </div>
            );
          })}
          {/* <a href={props.url}>#{props.hashtag}</a> */}
        </div>
      </div>
    </div>
  );
};
export default TopHashtag;

<style scoped></style>;
