import * as React from "react";

import shepherd from "./service/shepherd";

import PageSelector from "./component/PageSelector/main";
import LoginModal from "./component/LoginModal/main";
import MainPage from "./component/MainPage/main";

import "./App.scss";

function Seoha() {
	console.log("<Seoha/>");

	React.useEffect(() => window.addEventListener("popstate", shepherd.whip), []);

	return (
		<div className="seoha">
			<PageSelector className="router">
				<LoginModal data-page-name="login" />
				<MainPage data-page-name="main" />
			</PageSelector>
		</div>
	);
}

export default Seoha;
