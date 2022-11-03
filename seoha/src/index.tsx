import * as React from "react";
import { createRoot } from 'react-dom/client';

import OnePage from "./component/OnePage/main";

import "./index.scss"

createRoot(document.getElementById('app')).render(<OnePage/>);
