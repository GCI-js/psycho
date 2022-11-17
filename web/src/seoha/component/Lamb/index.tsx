import * as React from "react";

import shepherd from "../../service/shepherd";

import "./index.scss";


export default function Lamb(properties: any) {
    console.log(`<Lamb>${properties["data-lamb"]}</Lamb>`, );
    const lamb = properties["data-lamb"];
    const cl_names = ["std-page", properties.className].join(" ");
    const ref = React.useRef(null);
    const pages = properties.children;
    const ct = pages.length;
    const std_pages = Array(ct);
    const pagings = Array(ct);
    const names = Array(ct);
    const tracker = React.useState(0);
    for (let i = 0; i < ct; i++) {
        names[i] = pages[i].props["data-pose"];
        const [v, setValue] = React.useState(null);
        std_pages[i] = <div key={i}>{v}</div>;
        pagings[i] = setValue;
    }
    shepherd.adopt(lamb, React.useState(0));

    React.useEffect(() => {
        let loc = names.indexOf(shepherd.readPoses()[lamb]);
        if (loc < 0) {
            loc = 0;
            shepherd.chase(lamb, names[loc]);
        }
        tracker[1](loc);
        pagings[loc](pages[loc]);
        ref.current.children[tracker[0]].classList.remove("on");
        ref.current.children[loc].classList.add("on");
    });

    return <div className={cl_names} ref={ref}>{std_pages}</div>
}
