import * as React from "react";
import { createRoot } from "react-dom/client";

// import BettingGraph from "./betting_graph/App";
// import Sangjin from "./sangjin/App";
// import Wonjae from "./wonjae/App";
// import Jongseok from "./jongseok/App";
import Seoha from "./seoha/App";

import "./index.scss";

createRoot(document.getElementById("app")).render(<Seoha />);
