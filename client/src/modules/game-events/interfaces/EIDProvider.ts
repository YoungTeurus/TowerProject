export interface EIDProvider
{
    getAll(): string[];
    exist(eid: string): boolean;
    generate(): string;
    remove(eid: string): void;
}