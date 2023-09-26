import { NaiveUniqueIDGenerator } from "../../../utils/NaiveUniqueIDGenerator";
import { PIDProvider } from "../interfaces/PIDProvider";

export class NaivePIDProvider extends NaiveUniqueIDGenerator implements PIDProvider {
    allPIDs: string[];

    constructor() {
        super("pl-")
        this.allPIDs = [];
    }

    getAll(): string[] {
        return this.allPIDs;
    }
    exist(pid: string): boolean {
        return this.allPIDs.includes(pid);
    }
    generate(): string {
        const newId = super.generate();
        this.allPIDs.push(newId);
        return newId;
    }
    remove(pid: string): void {
        const i = this.allPIDs.indexOf(pid);
        if (i > -1)
            this.allPIDs = this.allPIDs.splice(i, 1);
    }
}

export const PIDP_INSTANCE = new NaivePIDProvider();