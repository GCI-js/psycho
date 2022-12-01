import * as mqtt from "mqtt";

import shepherd from "./shepherd";

const HTTP_ADDRESS = "http://10.113.69.29:8080";
const MTQQ_ADDRESS = "mqtt://10.113.69.69:9001";
const MQTT_CONFIG = {
    clean: true,
    clientId: 'test-client-id-' + Math.random(),
    username: 'test-username',
    password: 'test-password',
}

interface RawGroup {id: string, name: string, context_ids: string[]};
interface RawContext {id: string, attributes: {
    type: string, [key: string]: string
}}
interface Context {id: string, type: string, keys: string[], values: string[]}
type Index2Ids = Array<string[]>;

namespace fountain {
    let _connection_count = 0;
    let _groups: string[] = [];
    let _index2ids: Index2Ids = [];
    let _context_id = "";
    let _group_loc = 0;
    const _id2context: {[id: string]: Context | null} = {};
    const _client = mqtt.connect(MTQQ_ADDRESS, MQTT_CONFIG);
    _client.on('connect', () => {
        if (_connection_count >= 3) {
            return;
        }
        _client.subscribe(channel("random"), () => _connection_count++);
        _client.subscribe(channel("groups"), () => _connection_count++);
        _client.subscribe(channel("contexts"), () => _connection_count++);
        console.log(`success to connect. (${MTQQ_ADDRESS})`);
    });
    _client.on('message', (topic: string, message) => {
        if (topic == channel("groups") || topic == channel("random")) {
            const gps: RawGroup[] = JSON.parse(
                message.toString()).result.groups;
            const ids: string[] = [];
            [_index2ids, _groups] = [[], []];
            gps.forEach(v => {
                _groups.push(v["name"]);
                const ids_ = v["context_ids"];
                _index2ids.push(ids_);
                ids_.forEach(v_ => ids.push(v_));
            });
            const ids_ = Object.keys(_id2context)
            if (ids.sort().join("") == ids_.sort().join("")) return;
            ids_.forEach(v => delete _id2context[v]);
            ids.forEach(v => _id2context[v] = null);
            shepherd.chase("main");
        }
        else {
            const ctx_: RawContext = JSON.parse(
                message.toString()).result.contexts[0];
            const id = ctx_.id
            const ks: string[] = [];
            const vs: string[] = [];
            const ctx: Context = {
                id: id, type: "unknown", keys: ks, values: vs};
            _id2context[id] = ctx
            Object.entries(ctx_.attributes).forEach(([k, v]) => {
                if (k != "type") {
                    ks.push(k);
                    vs.push(v + '');
                }
                else ctx.type = v;
            });
            shepherd.chase(id);
        }
    })

    function userId() {
        return "user01";
    }
    function channel(alias: string) {
        return ["/cm", userId(), alias].join("/");
    }
    async function HttpRequester(alias: string, suffix="") {
        const address = [
            HTTP_ADDRESS, userId(), alias
        ].join("/") + "?to_mqtt=true" + suffix;
        await fetch(address);
        console.log(`success to request for '${address}'`);
    }

    export function pushByAlias(alias: string, user_id: string) {
        const prcs_id = setInterval(() => {
            if (_connection_count < 3) return;
            clearInterval(prcs_id);
            HttpRequester(alias);
        });
    }
    export function pushContext(context_id: string) {
        const prcs_id = setInterval(() => {
            if (_connection_count < 3) return;
            clearInterval(prcs_id);
            HttpRequester("contexts", `&context_id=${context_id}`);
        });
    }
    export function changeOrder(index: number, ids: string[]) {
        _index2ids[index] = ids;
    }
    export function changeGroupOrder(location: number, direction: -1 | 1) {
        const tgt_loc = location + direction;
        if (tgt_loc < 0 || tgt_loc >= _groups.length) return;
        const tmp: [string, string[]] = [
            _groups[location], _index2ids[location]];
        [_groups[location], _index2ids[location]] = [
            _groups[tgt_loc], _index2ids[tgt_loc]];
        [_groups[tgt_loc], _index2ids[tgt_loc]] = tmp;
    }
    export async function getRandom() {
        const address = [HTTP_ADDRESS, userId(), "random", "single"].join("/");
        return await fetch(address);
    }
    export function getGroups(user_id: string): Index2Ids {
        return _index2ids;
    }
    export function getGroupByLocation(location: number) {
        return _groups[location];
    }
    export function getContextById(context_id: string) {
        return _id2context[context_id];
    }
    export function getContext() {
        return _id2context[_context_id];
    }
    export function getGroup() {
        return _groups[_group_loc];
    }
    export function setDevice(context_id: string) {
        console.log(context_id)
        _context_id = context_id;
    }
    export function setGroup(location: number) {
        _group_loc = location;
    }
    export function createGroup(name: string) {
        _groups.splice(0, 0, name);
        _index2ids.splice(0, 0, []);
    }
    export function updateGroup(name: string) {
        _groups[_group_loc] = name;
    }
    export function deleteGroup() {
        _groups.splice(_group_loc, 1);
        _index2ids.splice(_group_loc, 1);
    }

    export function getGroupNames() {
        return _groups;
    }
    export function createContext(
        name: string, group: string, keys: string[], values: string[]
    ) {
        const id = "context-" + Math.random();
        const loc = _groups.indexOf(group);
        _index2ids[loc].push(id);
        _id2context[id] = {
            id: id, type: name, keys: keys, values: values};
    }
}

export default fountain;
