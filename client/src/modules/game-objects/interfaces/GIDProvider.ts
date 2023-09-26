export interface GIDProvider
{
    getAll(): string[];
    exist(gid: string): boolean;
    generate(): string;
    remove(gid: string): void;
}