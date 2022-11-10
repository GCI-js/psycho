namespace shepherd {

    const name2trigger: any = {}

    export function setLocation(name: string) {
        location.href = "#" + name;
    }
    export function readLocation() {
        const rslt = location.href.split("#")[1];
        if (rslt) return rslt;
        return "";
    }
    export function whip() {
        const name = readLocation();
        console.log("location:", name);
        const [v, setValue] = name2trigger[name];
        setValue(v + 1);
    }
    export function adopt(trigger: any, names: string[]) {
        names.forEach(v => name2trigger[v] = trigger);
    }
}

export default shepherd;
