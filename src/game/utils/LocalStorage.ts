export class LocalStorage {
    public get<T>(key: string): T | null {
        const value = this.getString(key);
        if (value === null)
            return null;

        try {
            return JSON.parse(value);
        } catch (error) {
            throw new Error("Can't parse value '" + value + "' as object");
        }
    }

    public getString<T>(key: string): string | null {
        const value = localStorage.getItem(key);
        if (value === null)
            return null;
        return value;
    }

    public set(key: string, object: Object): void {
        const json = JSON.stringify(object);
        localStorage.setItem(key, json);
    }

    public remove(key: string): void {
        localStorage.removeItem(key);
    }
}