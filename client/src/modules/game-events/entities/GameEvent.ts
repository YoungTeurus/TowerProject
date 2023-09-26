export class GameEvent {
    // Уникальное ID события
    eid: string;

    time: Date;
    type: string;
    params: Map<string, object>;

    constructor(eid: string, type: string, params?: Map<string, object>) {
        this.eid = eid;
        this.time = new Date();
        this.type = type;
        this.params = params ?? new Map();
    }
}