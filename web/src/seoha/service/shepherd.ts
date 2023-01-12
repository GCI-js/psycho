import { useState } from "react";


type Trigger = [number, React.Dispatch<React.SetStateAction<number>>];
interface Key2Trigger {[v: string]: {[v: string]: Trigger}}

namespace shepherd {

    let _previous: {[k: string]: string};
    const _key2triggers: Key2Trigger = {};

    export function initialize() {
        _previous = readPoses();
        window.addEventListener("popstate", shepherd.bleat);
    }
    export function whip(lamb: string, pose: string) {
        const lamb2pose = readPoses();
        lamb2pose[lamb] = pose
        location.href =
            "#" + Object.entries(lamb2pose).map(v => v.join(":")).join(",");
    }
    export function bleat() {
        const set = new Set<string>();
        const current = readPoses();
        Object.keys(_previous).forEach(v => set.add(v));
        Object.keys(current).forEach(v => set.add(v));
        const keys = Array.from(set).filter(v => _previous[v] != current[v]);
        _previous = current;
        keys.forEach(v => chase(`lamb-${v}`));
    }
    export function readPoses(): {[key: string]: string} {
        const code = location.href.split("#")[1];
        if (!code) return {};
        return JSON.parse(
            '{"' + code.replace(/,/g, '","').replace(/:/g, '":"') + '"}');
    }
    export function adopt(key: string, id: string) {
        if (_key2triggers[key] == undefined) _key2triggers[key] = {};
        _key2triggers[key][id] = useState(0);
    }
    export function chase(key: string) {
        if (!(key in _key2triggers)) return;
        Object.entries(_key2triggers[key]).forEach(v => v[1][1](v[1][0] + 1));
    }
}

export default shepherd;
