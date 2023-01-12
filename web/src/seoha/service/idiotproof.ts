import { useEffect, useState } from "react";

namespace idiotproof {

    let _interval_id = 0;
    const _id2memory: {[id: number]: number} = {};
    export function reverseInterval() {
        const id = useState(_interval_id)[0];
        if (id == _interval_id) _interval_id++;
        if (id in _id2memory) clearInterval(_id2memory[id]);
        return id;
    }
    export function setReverse(id: number, run: Function, duration: number) {
        _id2memory[id] = setInterval(run, duration);
    }

    let _component_id = 0;
    export function trace(message: string) {
        const id = useState(_component_id)[0];
        if (id == _component_id) _component_id++;
        console.log(`<${message}-${id}>`);
        useEffect(() => console.log(`</${message}-${id}>`));
        return id;
    }

    export function followOffset(element: HTMLElement, run: Function) {
        return new Promise((resolve => {
            const proc_id = setInterval(() => {
                if (element.offsetParent == null) return;
                clearInterval(proc_id);
                resolve(run());
            });
        }));
    }
}

export default idiotproof;
