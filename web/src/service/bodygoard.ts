namespace bodyguard {
    export function checkPermission(name: string, key: string): boolean {
        if (name == "asdf" && key == "asdf") {
            return true;
        }
        return false;
    }
}

export default bodyguard;
