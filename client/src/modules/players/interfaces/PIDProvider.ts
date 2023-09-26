export interface PIDProvider
{
    getAll(): string[];
    exist(pid: string): boolean;
    generate(): string;
    remove(pid: string): void;
}