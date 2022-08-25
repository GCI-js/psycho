import React from "react";
import "./hashtag.css";
const hashtag = (content: string, color: string) => {
	let contentClassName = "content";
	if (color) {
		contentClassName = "content " + color;
	}
	return <div className={contentClassName}>#{content}</div>;
};

export default hashtag;
