export class NaiveUniqueIDGenerator
{
    prefix: string;
    lastId: number;

    constructor(prefix: string) {
        this.prefix = prefix;
        this.lastId = 0;
    }

    generate(): string {
        const newId = this.lastId.toString();
        this.lastId++;
        return this.prefix + newId;
    }
}