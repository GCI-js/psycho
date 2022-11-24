import React, { useState } from "react";
import "./ButtonBox.css";

interface ButtonBoxItem {
	state: boolean;
	content: string;
	setState: any;
}
const ButtonBox = ({ state, content, setState }: ButtonBoxItem) => {
	let selected = "";
	if (state) {
		selected = " selected";
	} else {
		selected = " notSelected";
	}
	// console.log(state);
	// console.log(buttonBox);
	return (
		<button
			className={`buttonBox${selected}`}
			// onClick={setState}
			onClick={() => {
				setState(content);
			}}
		>
			{content}
		</button>
	);
};

export default ButtonBox;
