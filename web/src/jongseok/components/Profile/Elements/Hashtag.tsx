import React from "react";
import "./Hashtag.css";

export interface HashtagItem {
  content: string;
  color: string;
}
const Hashtag = ({ content, color }: HashtagItem) => {
  let contentClassName = "content";
  /*
[2022.01.12 jongseok lee] 
color값을 받으면 className에 추가해서 css color 바꿀 수 있도록 했습니다. 더 좋은 방법 있으면 바꿔도 됩니다.
*/
  if (color) {
    contentClassName = "content " + color;
  }
  return <div className={contentClassName}>#{content}</div>;
};

export default Hashtag;
