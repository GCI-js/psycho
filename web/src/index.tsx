import * as React from "react";
import { createRoot } from "react-dom/client";

// import OnePage from "./component/OnePage/main";
// import BettingGraph from "./betting_graph/App";
// import ProfileStats from "./profile_stats/App";
// import Sangjin from "./sangjin/App";
import Wonjae from "./wonjae/App";

import "./index.scss";

// createRoot(document.getElementById('app')).render(<OnePage/>);
// createRoot(document.getElementById('app')).render(<BettingGraph/>);
// createRoot(document.getElementById('app')).render(<ProfileStats/>);
createRoot(document.getElementById("app")).render(<Wonjae />);
