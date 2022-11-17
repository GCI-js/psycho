import * as mqtt from "mqtt";


namespace fountain {
    let _device_ids: any = [];

    const _key2trigger: any = {};
    const _id2device: any = {};
    let _device_id: string = null;

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
            const ids: any[] = JSON.parse(message.toString());
            const code = ids.sort().join("");
            const ids_ = Object.keys(_id2device).sort();
            const code_ = ids_.join("");
            if (code == code_) return;
            ids_.forEach(v => {
                _client.unsubscribe(`context/device/${v}`);
                delete _id2device[v];
            });    
            ids.forEach(v => {
                _client.subscribe(`context/device/${v}`);
                _id2device[v] = {};
            });
            _device_ids = Object.keys(_id2device);
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
    export function pushDeviceIds(user_id: string) {
        _client.publish("context/device-ids-push", "");
    }
    export function changeOrder(device_ids: any[]) {
        _device_ids = device_ids;
        const [v, setValue] = _key2trigger["main"];
        setValue(v + 1);
    }
    export function pushDevice(device_id: string) {
        _client.publish(`context/device-push/${device_id}`, "");
    }
    export function getDeviceIds(user_id: string) {
        return _device_ids;
    }
    export function getDevice(device_id="") {
        return _id2device[device_id == "" ? _device_id : device_id];
    }
}

export default fountain;
