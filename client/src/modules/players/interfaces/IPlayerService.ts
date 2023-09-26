import { Player } from "../entities/Player";

export interface IPlayerService
{
    getAll(): Player[];
    getById(pid: string): Player | null;
}