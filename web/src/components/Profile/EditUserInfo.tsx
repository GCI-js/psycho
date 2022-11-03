import React from "react"
import "./EditUserInfo.css"
// import DropDown from "./Dropdown";
const EditUserInfo = () => {
	return (
		<div>
			<text className="choiceText">{`태어난 나라를 골라주세요\n`}</text>
			{/* <DropDown /> */}
			<text className="choiceText">{`거주하는 시, 구를 선택해주세요\n`}</text>
			<text className="choiceText">{`성별을 선택해주세요\n`}</text>
			<text className="choiceText">{`생년월일을 선택해주세요\n`}</text>
		</div>
	)
}

export default EditUserInfo
