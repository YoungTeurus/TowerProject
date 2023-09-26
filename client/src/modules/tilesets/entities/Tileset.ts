import { loadImageAndSplit } from "../../../utils/ImageSplit";
import { Tile } from "../interfaces/Tile";
import { TilesetConfig } from "../interfaces/TilesetConfig";

export class Tileset {
    tiles?: Tile[];
    tilesetSrc: string;
    config: TilesetConfig;

    constructor(tilesetSrc: string, config: TilesetConfig) {
        this.tilesetSrc = tilesetSrc;
        this.config = config;
    }

    async init() {
        this.tiles = await loadImageAndSplit(this.tilesetSrc, this.config);
    }
}