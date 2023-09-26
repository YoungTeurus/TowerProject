import { GameObject } from "../../game-objects/entities/GameObject";
import { Tileset } from "../../tilesets/entities/Tileset";
import { TilesetConfig } from "../../tilesets/interfaces/TilesetConfig";
import { Card } from "./Card";
import { CardInfoSet } from "../interfaces/CardInfoSet";
import { CardSet } from "./CardSet";

export class VisualCardSet extends CardSet {
    tileSet: Tileset;
    cardInfoSet: CardInfoSet;

    constructor(gid: string, cardInfoSet: CardInfoSet, tilesetSrc: string, config: TilesetConfig) {
        super(gid, cardInfoSet);
        this.tileSet = new Tileset(tilesetSrc, config);
        this.cardInfoSet = cardInfoSet;
    }

    async init() {
        await this.tileSet.init();
    }

    getCardTile(cardId: string) {
        // Возвращать тайл для отображения
    }
}