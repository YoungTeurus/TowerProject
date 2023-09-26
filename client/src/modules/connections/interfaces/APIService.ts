import { IConnection } from "./IConnection";

export interface APIService {
    getConnection(): IConnection;

    /**
     * Возвращает URL до endpoint-а сервиса.
     * Например, для сервера "https://localhost:8080" и сервиса User этот метод вернёт "https://localhost:8080/api/user"
     */
    getServiceURL(): URL;
}