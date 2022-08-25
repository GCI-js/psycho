import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import MBTIHistogram from "./components/profile/MBTIHistorgram";
import MBTIHistogram from "./components/profile/mbtiHistorgram";
function App() {
	return (
		<div className="App">
			<MBTIHistogram />
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;
