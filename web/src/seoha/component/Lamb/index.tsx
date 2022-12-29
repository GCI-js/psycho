import * as React from "react";

import idiotproof from "../../service/idiotproof";
import shepherd from "../../service/shepherd";

import styles from './index.module.scss';


interface ChildProperties {
    "data-pose": string;
}
interface Properties extends React.PropsWithChildren {
    "data-lamb": string;
    className?: string;
    children: React.ReactElement<ChildProperties>[];
}

export default function Lamb(properties: Properties) {
    const component_id = idiotproof.trace(`Lamb-${properties["data-lamb"]}`);
    const lamb = properties["data-lamb"];
    const cl_name = [styles.index, properties.className].join(" ");
    const ref = React.useRef(null);
    const pages = properties.children as React.ReactElement<ChildProperties>[];
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
    shepherd.adopt("lamb-" + lamb, component_id);

    React.useEffect(() => {
        let loc = names.indexOf(shepherd.readPoses()[lamb]);
        if (loc < 0) shepherd.whip(lamb, names[loc = 0]);
        tracker[1](loc);
        pagings[loc](pages[loc]);
        ref.current.children[tracker[0]].classList.remove("on");
        ref.current.children[loc].classList.add("on");
    });
    return <div className={cl_name} ref={ref}>{std_pages}</div>
}
