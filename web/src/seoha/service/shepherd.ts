import * as React from "react";


type Trigger = [number, React.Dispatch<React.SetStateAction<number>>];
interface Key2Trigger {[key: string]: Trigger[]}

namespace shepherd {

    const _key2triggers: Key2Trigger = {};

    export function whip(lamb: string, pose: string) {
        const lamb2pose = readPoses();
        lamb2pose[lamb] = pose;
        location.href = "#" + 
            Object.entries(lamb2pose).map(v => v.join(":")).join(",") +
            "#" + lamb;
    }
    export function readPoses() {
        const code = location.href.split("#")[1];
        if (!code) return {};
        return JSON.parse(
            '{"' + code.replace(/,/g, '","').replace(/:/g, '":"') + '"}');
    }
    export function readLamb() {
        return location.href.split("#")[2];
    }
    export function bleat() {
        chase("lamb-" + readLamb());
    }
    export function adopt(key: string) {
        if (_key2triggers[key] == undefined) _key2triggers[key] = [];
        _key2triggers[key].push(React.useState(0));
    }
    export function chase(key: string) {
        if (!_key2triggers[key]) return;
        _key2triggers[key].forEach(([v, setValue]) => setValue(v + 1));
    }
}

export default shepherd;
