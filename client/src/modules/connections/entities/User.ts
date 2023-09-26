export class User {
    uid: string;
    created?: Date;
    authority?: string[];
    lastLogin?: Date;


    constructor($uid: string) {
        this.uid = $uid;
    }
}