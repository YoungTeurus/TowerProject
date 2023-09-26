import { NaiveUniqueIDGenerator } from "../../../utils/NaiveUniqueIDGenerator";
import { GIDProvider } from "../interfaces/GIDProvider";

export class NaiveGIDProvider extends NaiveUniqueIDGenerator implements GIDProvider {
    allGIDs: string[];

    constructor() {
        super("go-")
        this.allGIDs = [];
    }

    getAll(): string[] {
        return this.allGIDs;
    }
    exist(gid: string): boolean {
        return this.allGIDs.includes(gid);
    }
    generate(): string {
        const newId = super.generate();
        this.allGIDs.push(newId);
        return newId;
    }
    remove(gid: string): void {
        const i = this.allGIDs.indexOf(gid);
        if (i > -1)
            this.allGIDs = this.allGIDs.splice(i, 1);
    }
}

export const GIDP_INSTANCE = new NaiveGIDProvider();