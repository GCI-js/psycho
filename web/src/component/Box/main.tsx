import * as React from "react";

import './main.scss';


const Box = React.forwardRef(function render(properties: any, ref: any) {
    console.log("<Box/>")
    const cls = ["j53hj23jk3hkj43423", properties.className].join(" ")
    return <div className={cls} ref={ref} onClick={properties.onClick}>
        {properties.children}
    </div>
});
export default Box;
