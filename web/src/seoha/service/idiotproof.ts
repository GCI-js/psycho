import { useState } from "react";

namespace idiotproof {

    let _new_id = 0;
    const _id2memory: {[id: number]: any} = {};
    export function intervalId() {
        const new_id = useState(_new_id)[0];
        if (new_id == _new_id) _new_id++;
        return new_id;
    }
    export function setInterval_(id: number, run: Function, duration: number ) {
        _id2memory[id] = setInterval(run, duration);
    }
    export function clearInterval_(id: number) {
        if (id in _id2memory) clearInterval(_id2memory[id]);
    }

    export function focus(element: HTMLElement) {
        const proc_id = setInterval(() => {
            if (element.offsetParent ==  null) return;
            clearInterval(proc_id);
            element.focus()
        });
    }
}

export default idiotproof;
