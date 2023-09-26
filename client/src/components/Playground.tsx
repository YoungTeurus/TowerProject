import React, { useEffect, useState } from "react";
import { CardInfoSet } from "../modules/cards/interfaces/CardInfoSet";
import { CardSet } from "../modules/cards/entities/CardSet";
import { GIDP_INSTANCE } from "../modules/game-objects/implementations/NaiveGIDProvider";
import { GIDProvider } from "../modules/game-objects/interfaces/GIDProvider";
import { Tileset } from "../modules/tilesets/entities/Tileset";
import { Tile } from "../modules/tilesets/interfaces/Tile";
import { ImagePart } from "../utils/ImageSplit";
import { parse } from "../utils/JsonUtils";

interface Props {

}

interface State {
    cards: ImagePart[] | null;
}
const gidp: GIDProvider = GIDP_INSTANCE;

const cardsTilesetImgSrc = require("../assets/cards.webp") as string;
const cardsTileset = new Tileset(cardsTilesetImgSrc, {
    tileW: 136,
    tileH: 190,
    marginW: 5,
    marginH: 5,
    startTop: 9,
    startLeft: 9,
    tileWCount: 4,
    tileHCount: 4,
    tilePrefix: "playingCard"
});

const playingCardInfoObject = require("../assets/playingCardsInfo.json") as object;
const playingCardInfoString = JSON.stringify(playingCardInfoObject);

const playingCardsInfoSet = parse<CardInfoSet>(playingCardInfoString);
const playingCardsSet = new CardSet(gidp.generate(), playingCardsInfoSet);
console.log(playingCardsInfoSet.cards);

// TODO: playingCardsInfoSet.cards на самом деле не Map, поэтому там нет нужных методов!



// const connection: IConnection = CONNECTION;

export const Playground: React.FunctionComponent<Props> = (props) => {
    const [state, setState] = useState<State>({
        cards: null
    });

    useEffect(() => {
        cardsTileset.init()
            .then(_ => setState({ ...state, cards: cardsTileset.tiles as Tile[] }));
    }, []);

    return (
        <>
            {"F12"}
            {state.cards != undefined ? state.cards.map(v => <img key={v.id} src={v.src} />) : "Loading"}
        </>
    );
}