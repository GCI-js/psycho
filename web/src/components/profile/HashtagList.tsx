import React from "react";
import Hashtag, { HashtagItem } from "./Hashtag";
import "./HashtagList.css";
interface HashtagItems extends Array<HashtagItem> {}

const HashtagList = () => {
	let dummyHashtags: HashtagItems = [
		{ content: "대한민국", color: "orange" },
		{ content: "경기고", color: "lime" },
	];

	return (
		<div className="hashtagContainer">
			<text className="title">#내가 선택한 해시태그</text>
			{dummyHashtags.map((el) => {
				return <Hashtag content={el.content} color={el.color} />;
			})}
		</div>
	);
};

export default HashtagList;
