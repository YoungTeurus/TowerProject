import { GameEvent } from "../../game-events/entities/GameEvent";
import { GameObject } from "../../game-objects/entities/GameObject";

export class InteractableObject extends GameObject {
    onClick(): GameEvent {
        return new GameEvent("1", "test");
    }
}