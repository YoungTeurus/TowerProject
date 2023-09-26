import { GameEvent } from "../entities/GameEvent";

export interface EventHistory {
    getAll(): GameEvent[];
    getLast(): GameEvent | null;
    getAllAfter(eid: string): GameEvent[];
    contains(eid: string): boolean;

    add(event: GameEvent): void;
    clear(): void;
}