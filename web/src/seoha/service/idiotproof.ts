namespace idiotproof {
    export function focus(element: HTMLElement) {
        const proc_id = setInterval(() => {
            if (element.offsetParent ==  null) return;
            clearInterval(proc_id);
            element.focus()
        });
    }
}

export default idiotproof;
