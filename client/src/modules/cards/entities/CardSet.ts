import { GameObject } from "../../game-objects/entities/GameObject";
import { Card } from "./Card";
import { CardInfoSet } from "../interfaces/CardInfoSet";

export class CardSet extends GameObject {
    cardInfoSet: CardInfoSet;

    constructor(gid: string, cardInfoSet: CardInfoSet) {
        super(gid);
        this.cardInfoSet = cardInfoSet;
    }

    getAll(): Card[] {
        let x = Array.from(this.cardInfoSet.cards);
        console.log(x);
        return x.map(([cardId, cardAttr]) => new Card("", this, cardId));
    }

    createCard(cardGid: string, cardId: string): Card {
        return new Card(cardGid, this, cardId);
    }
}