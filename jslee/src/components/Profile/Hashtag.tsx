import React from "react";
import "./Hashtag.css";

export interface HashtagItem {
	content: string;
	color: string;
}
const Hashtag = ({ content, color }: HashtagItem) => {
	let contentClassName = "content";
	if (color) {
		contentClassName = "content " + color;
	}
	return <div className={contentClassName}>#{content}</div>;
};

export default Hashtag;
