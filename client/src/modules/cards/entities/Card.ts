import { InteractableObject } from "../../interactable-objects/entities/InteractableObject";
import { CardSet } from "./CardSet";

export class Card extends InteractableObject {
    parentSet: CardSet;
    cardId: string;

    constructor(gid: string, parentSet: CardSet, cardId: string) {
        super(gid);
        this.parentSet = parentSet;
        this.cardId = cardId;
    }
}