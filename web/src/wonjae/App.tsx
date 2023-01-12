import React from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import Lamb from "../seoha/component/Lamb";
import shepherd from "../seoha/service/shepherd";

function Wonjae() {
  React.useEffect(
    () => window.addEventListener("popstate", shepherd.bleat),
    []
  );

  // 시작 페이지
  shepherd.whip("wonjae", "welcome");

  return (
    <div className="App">
      <Lamb data-lamb="wonjae">
        <WelcomePage data-pose="welcome" />
      </Lamb>
    </div>
  );
}

export default Wonjae;
