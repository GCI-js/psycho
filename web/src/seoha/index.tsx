import * as React from "react";
import { createRoot } from 'react-dom/client';

import shepherd from "./service/shepherd";

import App from "./App";

import "./index.scss"


window.addEventListener("popstate", shepherd.whip);

createRoot(document.getElementById('app')).render(<App/>);
