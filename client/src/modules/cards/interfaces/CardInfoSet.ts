type CardAttributes = Map<string, string>;

export interface CardInfoSet {
    prefix: string;
    cards: Map<string /* cardId */, CardAttributes>;
}