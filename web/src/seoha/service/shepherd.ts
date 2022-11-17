namespace shepherd {

    const lamb2trigger: any = {}

    export function chase(lamb: string, pose: string) {
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
    export function whip() {
        const [v, setValue] = lamb2trigger[readLamb()];
        setValue(v + 1);
    }
    export function adopt(lamb: string, trigger: any) {
        lamb2trigger[lamb] = trigger;
    }
}

export default shepherd;
