import * as React from "react";

import shepherd from "../../service/shepherd";

import "./main.scss";


export default function PageSelector(properties: any) {
    const cl_names = ["std-pages", properties.className].join(" ");
    console.log("<PageSelector/>" + cl_names);
    const ref = React.useRef(null);
    const pages = properties.children;
    const ct = pages.length;
    const std_pages = Array(ct);
    const pagings = Array(ct);
    const names = Array(ct);
    const tracker = React.useState(0);
    for (let i = 0; i < ct; i++) {
        names[i] = pages[i].props["data-page-name"];
        const [v, setValue] = React.useState(null);
        std_pages[i] = <div className="std-page" key={i}>{v}</div>;
        pagings[i] = setValue;
    }
    shepherd.adopt(React.useState(0), names);

    React.useEffect(() => {
        let loc = names.indexOf(shepherd.readLocation());
        console.log(names, shepherd.readLocation(), tracker[0]);
        if (loc < 0) {
            loc = 0;
            shepherd.setLocation(names[loc]);
        }
        tracker[1](loc);
        pagings[loc](pages[loc]);
        ref.current.children[tracker[0]].classList.remove("on");
        ref.current.children[loc].classList.add("on");
    });

    return <div className={cl_names} ref={ref}>{std_pages}</div>
}
