import { useEffect, useState } from "react";


type Trigger = [number, React.Dispatch<React.SetStateAction<number>>];
interface Key2Trigger {[v: string]: {[v: number]: Trigger}}

namespace shepherd {

    let _previous: string;
    const _key2triggers: Key2Trigger = {};

    function mainAnchor() {
        const vs = location.href.split("#");
        return [vs[1], vs[2]].join("#");
    }

    export function feed(key: string, value:string="") {
        const fur = readFur();
        if (value == "") fur.delete(key);
        else fur.set(key, value);
        location.href = "#" + mainAnchor() + "#" + fur.toString();
    }
    export function whip(lamb: string, pose: string) {
        _previous = mainAnchor();
        const lamb2pose = readPoses();
        lamb2pose[lamb] = pose;
        location.href = [
            "",
            Object.entries(lamb2pose).map(v => v.join(":")).join(","),
            lamb,
            readFur().toString()].join("#");
    }
    export function readPoses(): {[key: string]: string} {
        const code = location.href.split("#")[1];
        if (!code) return {};
        return JSON.parse(
            '{"' + code.replace(/,/g, '","').replace(/:/g, '":"') + '"}');
    }
    export function readLamb() {
        return location.href.split("#")[2];
    }
    export function readFur() {
        return new URLSearchParams(location.href.split("#")[3]);
    }
    export function bleat() {
        if (_previous == mainAnchor() || _previous == undefined) return;
        chase("lamb-" + readLamb());
    }
    
    export function adopt(key: string, id: number) {
        if (_key2triggers[key] == undefined) _key2triggers[key] = {};
        _key2triggers[key][id] = useState(0);
    }
    export function chase(key: string) {
        if (!_key2triggers[key]) return;
        Object.entries(_key2triggers[key]).forEach(v => v[1][1](v[1][0] + 1));
    }
}

export default shepherd;
