import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import MBTIHistogram from "./components/profile/MBTIHistorgram";
import Profile from "./components/Profile/Pages/Profile";
import EditProfile from "./components/Profile/Pages/EditProfile";
import EditUserInfo from "./components/Profile/Pages/EditUserInfo";
import EditHashtag from "./components/Profile/Pages/EditHashtag";
import Setting from "./components/Profile/Pages/Setting";
import Withdrawal from "./components/Profile/Pages/Withdrawl";
function ProfileStats() {
  return (
    <div className="jongseok">
      <Withdrawal />
      {/* <EditUserInfo /> */}
      {/* <Profile /> */}
      {/* <EditHashtag /> */}
    </div>
    // <div className="App">
    // 	<header className="App-header">
    // 		<img src={logo} className="App-logo" alt="logo" />
    // 		<p>
    // 			Edit <code>src/App.tsx</code> and save to reload.
    // 		</p>
    // 		<a
    // 			className="App-link"
    // 			href="https://reactjs.org"
    // 			target="_blank"
    // 			rel="noopener noreferrer"
    // 		>
    // 			Learn React
    // 		</a>
    // 	</header>
    // </div>
  );
}

export default ProfileStats;
