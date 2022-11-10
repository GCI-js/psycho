import * as React from "react";
import { createRoot } from "react-dom/client";

// import BettingGraph from "./betting_graph/App";
// import ProfileStats from "./profile_stats/App";
// import Sangjin from "./sangjin/App";
// import Wonjae from "./wonjae/App";
import Seoha from "./seoha/App";
import Jongseok from "./jongseok/App";

import "./index.scss";

// createRoot(document.getElementById('app')).render(<OnePage/>);
// createRoot(document.getElementById('app')).render(<BettingGraph/>);
// createRoot(document.getElementById('app')).render(<ProfileStats/>);
// createRoot(document.getElementById('app')).render(<Wonjae/>);
// createRoot(document.getElementById("app")).render(<Jongseok />);
createRoot(document.getElementById("app")).render(<Seoha />);
