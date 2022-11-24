import * as React from "react";

import shepherd from "../../service/shepherd";
import fountain from "../../service/fountain";

import Card from "../Card";

import './index.scss';


export default function Cards(properties: any) {
    console.log("<MainPage/>");

    const name = properties.name;
    const ids = properties.ids;

    let action_state="up"
    function onMouseDown(event: MouseEvent) {
        if (action_state != "up") return;
        action_state = "down";
        const elem: HTMLElement = (
            event.target as HTMLElement).closest(".on-mouse-down-jed843274u");
        const style = getComputedStyle(elem);
        const margin = parseInt(style.margin);
        const base_elem = elem.parentNode.childNodes[0] as HTMLElement;
        const base_top = base_elem.offsetTop - margin;
        const base_left = base_elem.offsetLeft - margin;
        const half_ht = parseInt(style.height) / 2 + margin;
        const half_wd = parseInt(style.width) / 2 + margin;
        const base_height = 2 * half_ht;
        const parent = elem.parentNode;
        let group_width = 0;
        let base_loc = 0;
        const div = document.createElement("div");
        div.classList.add("card");
        const nodes = parent.childNodes;
        nodes.forEach((v: HTMLElement, i) => {
            const width = v.offsetLeft;
            group_width = group_width > width ? group_width : width;
            if (v == elem) base_loc = i;
        });
        group_width = group_width + half_wd - base_left;
        parent.insertBefore(div, elem);
        elem.style.position = "absolute";
        elem.style.zIndex = "5";
        const rect = div.getBoundingClientRect()
        elem.style.top = event.clientY + window.scrollY - half_ht + "px";
        elem.style.left = event.clientX + window.scrollX - half_wd + "px";
        const [base_x, base_y] = [event.clientX, event.clientY];
        document.onmousemove = (event: MouseEvent) => {
            if (action_state != "down" && action_state != "move") return;
            if (action_state == "down") {
                const [x, y] = [event.clientX, event.clientY];
                const dx = Math.abs(base_x - x) + Math.abs(base_y - y);
                if (dx < 50) return;
                action_state = "move";
            }
            elem.style.top = event.clientY + window.scrollY - half_ht + "px";
            elem.style.left = event.clientX + window.scrollX - half_wd + "px";
            const dist = (
                elem.offsetLeft - base_left +
                parseInt((elem.offsetTop - base_top) / base_height + "") *
                group_width);
            let score = 9999;
            let elem_ = null;
            nodes.forEach((v: HTMLElement) => {
                if (v == elem) return;
                const score_ = Math.abs(
                    v.offsetLeft - base_left +
                    parseInt((v.offsetTop - base_top) / base_height + "") *
                    group_width -
                    dist);
                if (score > score_) {
                    elem_ = v;
                    score = score_;
                }
            });
            parent.insertBefore(div, elem_);
        }
        elem.onmouseup = () => {
            if (action_state == "move") {
                let loc = 0;
                let locs: number[] = [];
                const ct = nodes.length - 2;
                nodes.forEach(v => {
                    if (v == elem) return;
                    if (v == div) locs.push(base_loc);
                    if (loc == base_loc) loc++;
                    if (loc < ct) locs.push(loc++);
                });
                fountain.changeOrder(name, locs.map(v => ids[v]));
            }
            else if (action_state == "down") {
                fountain.chase(ids[base_loc], "edit");
                shepherd.chase("device", "display");
            }
            action_state = "up";
            elem.style.zIndex = "";
            elem.style.position = "";
            elem.onmouseup = document.onmousemove = null;
            div.remove();
        }
    }

    return <div className="cards-hjeahdskdhsur89">
        {ids.map((v: any) => <Card
            className="card on-mouse-down-jed843274u"
            device_id={v} key={v}
            onMouseDown={onMouseDown}/>)}
        <div>
            <div className="move-btn-duo">
                <div
                    className="move-btn"
                    onClick={() => fountain.changeGroupOrder(name, -1)}
                >up</div>
                <div
                    className="move-btn"
                    onClick={() => fountain.changeGroupOrder(name, 1)}
                >down</div>
            </div>
        </div>
    </div>
}
