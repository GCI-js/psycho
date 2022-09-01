import React, { useState } from "react";
import MBTIHistogram from "./MBTIHistogram";
import HashtagList from "./HashtagList";
import Gamble from "./Gamble";
import "./Profile.css";
// import pencilImg from "../img/pencil.png";
const Profile = () => {
	const [isEdit, setIsEdit] = useState(false);
	const dummyUserName = "아크릴오므라이스";
	return (
		<div className="container">
			<div style={{ display: "flex" }}>
				<h2 className="username">{`@${dummyUserName}`}</h2>
				{/* <img src={pencilImg} alt="edit" /> */}
				<button
					onClick={() => {
						setIsEdit(!isEdit);
					}}
				>
					edit
				</button>
			</div>
			{isEdit ? null : (
				<div>
					<MBTIHistogram />
					<HashtagList />
					<Gamble />
				</div>
			)}
		</div>
	);
};

export default Profile;
