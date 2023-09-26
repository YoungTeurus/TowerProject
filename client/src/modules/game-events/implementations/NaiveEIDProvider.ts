import { NaiveUniqueIDGenerator } from "../../../utils/NaiveUniqueIDGenerator";
import { EIDProvider } from "../interfaces/EIDProvider";

export class NaiveEIDProvider extends NaiveUniqueIDGenerator implements EIDProvider {
    allEIDs: string[];

    constructor() {
        super("ev-")
        this.allEIDs = [];
    }

    getAll(): string[] {
        return this.allEIDs;
    }
    exist(eid: string): boolean {
        return this.allEIDs.includes(eid);
    }
    generate(): string {
        const newId = super.generate();
        this.allEIDs.push(newId);
        return newId;
    }
    remove(eid: string): void {
        const i = this.allEIDs.indexOf(eid);
        if (i > -1)
            this.allEIDs = this.allEIDs.splice(i, 1);
    }
}

export const EIDP_INSTANCE = new NaiveEIDProvider();