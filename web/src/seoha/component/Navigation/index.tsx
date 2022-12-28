import * as React from "react";

import shepherd from "../../service/shepherd";

import Search from "../../../svg/Search";

import './index.scss';


export default function Navigation() {
    console.log("<Navigation/>");
    return <div className="navigation-asalbfa7">
        <div onClick={() => shepherd.whip("test", "jongseok")}>
            js
        </div>
        <div>
            <Search className="search-svg"/>
        </div>
        <div onClick={() => shepherd.whip("test", "younghoon")}>
            yh
        </div>
        <div onClick={() => shepherd.whip("test", "sangjin")}>
            sj
        </div>
        <div onClick={() => shepherd.whip("test", "wonjae")}>
            wj
        </div>
    </div>
}
