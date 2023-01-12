import { useEffect, useState } from "react";


namespace idiotproof {

    const _id2memory: {[id: string]: number} = {};
    export function clearReverse(id: string) {
        if (id in _id2memory) clearInterval(_id2memory[id]);
    }
    export function reverseInterval(
        id: string, run: Function, duration: number
    ) {
        _id2memory[id] = setInterval(run, duration);
    }

    let _component_id = 0;
    export function trace(run: Function, tag: string = "____") {
        const id = useState(_component_id)[0];
        if (id == _component_id) _component_id++;
        const name = run.name;
        const msg = `${tag}\t${id}\t${name}`
        console.log(`<${msg}>`);
        useEffect(() => console.log(`</${msg}>`));
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
