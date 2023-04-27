import * as React from "react";
import { createRoot } from "react-dom/client";

// import BettingGraph from "./betting_graph/App";
// import ProfilePage from "./profile_stats/App";
// import Sangjin from "./sangjin/App";
// import Sangjin from "./sangjin/App";
// import Wonjae from "./wonjae/App";
// import Jongseok from "./jongseok/App";
import App from "./App";

import "./index.scss";

createRoot(document.getElementById("app")).render(<App />);
