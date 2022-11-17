import * as React from "react";

import './index.scss';


export default function Button(properties: any) {
    console.log("<Button/>")

    const ref = React.useRef(null);
    const component_id = "hld84jf87e3jd8";
    const cls_names = [properties.className, component_id].join(" ");
    let is_open = true;

    function showAction() {
        if (!is_open) return;
        is_open = false;
        const elem: HTMLElement = ref.current;
        elem.classList.add("on");
        setTimeout(() => {
            elem.classList.remove("on");
            is_open = true;
        }, 400);
        const fxn = properties.onClick;
        if (fxn) setTimeout(() => properties.onClick(), 200);
    }

    return <div onClick={showAction} className={cls_names}>
        <div ref={ref}></div>
        {properties.children}
    </div>
}
