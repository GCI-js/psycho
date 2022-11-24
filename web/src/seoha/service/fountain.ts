import * as mqtt from "mqtt";


interface GroupInfo {"name": string, "ids": string[]};
interface Group2Ids {[key: string]: string[]};

namespace fountain {
    let _groups: string[] = [];
    let _group2ids: Group2Ids = {};
    let _device_id: string = "";
    const _id2device: {[key: string]: any} = {};
    const _key2trigger: any = {};
    const host_address = "mqtt://10.113.68.90:1884"
    const _client = mqtt.connect(host_address, {
        clean: true,
        clientId: 'test-client-id-asdfbasud232h3',
        username: 'test-username-asdfbasud232h3',
        password: 'test-password-asdfbasud232h3',
    });
    _client.on('connect', () => {
        _client.subscribe("context/device-ids");
        console.log(`success to connect. (${host_address})`);
    });
    _client.on('message', (topic, message) => {
        if (topic == "context/device-ids") {
            const meta_info: GroupInfo[] = JSON.parse(message.toString());
            const ids: string[] = [];
            _groups = [];
            _group2ids = {};
            meta_info.forEach(v => {
                const name = v["name"];
                _groups.push(name)
                _group2ids[name] = v["ids"];
                v["ids"].forEach(v_ => ids.push(v_))
            });
            const code = ids.sort().join("");
            const ids_ = Object.keys(_id2device).sort();
            const code_ = ids_.join("");
            if (code == code_) return;
            ids_.forEach(v => {
                _client.unsubscribe(`context/device/${v}`)
                delete _id2device[v];
            });
            ids.forEach(v => {
                _client.subscribe(`context/device/${v}`);
                _id2device[v] = {};
            });
            const [v, setValue] = _key2trigger["main"];
            setValue(v + 1);
            return;
        }
        const device_id = topic.match(/context\/device\/(\w+)/)[1];
        _id2device[device_id] = JSON.parse(message.toString());
        const [v, setValue] = _key2trigger[device_id];
        setValue(v + 1);
    })
    export function adopt(trigger: any, key: string) {
        _key2trigger[key] = trigger;
    }
    export function chase(device_id: string, key="") {
        _device_id = device_id;
        key = key == "" ? device_id : key;
        if (!_key2trigger[key]) return;
        const [v, setValue] = _key2trigger[key];
        setValue(v + 1);
    }
    export function pushMetaInfo(user_id: string) {
        _client.publish("context/device-ids-push", "");
    }
    export function getMetaInfo(user_id: string): [string[], Group2Ids] {
        return [_groups, _group2ids];
    }
    export function pushDevice(device_id: string) {
        _client.publish(`context/device-push/${device_id}`, "");
    }
    export function getDevice(device_id="") {
        return _id2device[device_id == "" ? _device_id : device_id];
    }
    export function changeOrder(name: string, ids: string[]) {
        _group2ids[name] = ids;
        const [v, setValue] = _key2trigger["main"];
        setValue(v + 1);
    }
    export function changeGroupOrder(name: string, direction: -1 | 1) {
        const loc = _groups.indexOf(name);
        const tgt_loc = loc + direction;
        if (tgt_loc < 0 || tgt_loc >= _groups.length) return;
        const tmp = _groups[loc];
        _groups[loc] = _groups[loc + direction];
        _groups[loc + direction] = tmp;
        const [v, setValue] = _key2trigger["main"];
        setValue(v + 1);
    }
}

export default fountain;
