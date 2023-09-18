import { IConnection } from "../../interfaces/IConnection";
import { APIService } from "../../interfaces/services/APIService";
import { APIUtils } from "../../utils/APIUtils";
import { User } from "../User";

export class UserService implements APIService {
    public static BASE_URL = "/user";

    connection: IConnection;

    constructor(connection: IConnection) {
        this.connection = connection;
    }

    getConnection(): IConnection {
        return this.connection;
    }

    getServiceURL(): URL {
        return APIUtils.connectUrl(this.connection.getAPIBaseURL(), UserService.BASE_URL);
    }

    public getCurrent(): Promise<User | null> {
        return this.connection.get<User>(
            APIUtils.connectUrl(this.getServiceURL(), "/current")
        );
    }

    public getById(id: number): Promise<User | null> {
        return this.connection.get<User>(
            APIUtils.connectUrl(this.getServiceURL(), "/get/" + id)
        );
    }
}