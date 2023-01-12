import * as React from "react";

import idiotproof from "../../service/idiotproof";
import shepherd from "../../service/shepherd";

import styles from './index.module.scss';


interface PageProperties {
    "data-pose": string;
}
interface Properties_ extends React.PropsWithChildren, Properties {
    "data-lamb": string;
    children: React.ReactElement<PageProperties>[];
    pageClassName?: string;
}

export default function Lamb(properties: Properties_) {
    const id = [`_${idiotproof.trace(Lamb, "lamb")}`, properties.id].join();
    const cl = [styles.index, properties.className].join(" ");
    const lamb = properties["data-lamb"];
    shepherd.adopt(`lamb-${lamb}`, id);
    const ref: React.RefObject<HTMLDivElement> = React.useRef(null);
    const cl_name_ = properties.pageClassName;
    const children = properties.children;
    const ct = children.length;
    const names = Array(ct);
    const [pages, i2setPage] = [Array(ct), Array(ct)];
    for (let i = 0; i < ct; i++) {
        names[i] = children[i].props["data-pose"];
        [pages[i], i2setPage[i]] = React.useState(null);
    }
    React.useEffect(() => {
        const elems = ref.current.children;
        Array.from(elems).forEach(v => v.classList.remove("on"));
        let i = names.indexOf(shepherd.readPoses()[lamb])
        i = i < 0 ? 0 : i;
        elems[i].classList.add("on");
        if (pages[i] != children[i]) i2setPage[i](children[i]);
    });
    return <div id={id} className={cl} ref={ref}>
        {pages.map((v, i) => <div className={cl_name_} key={i}>{v}</div>)}
    </div>
}
