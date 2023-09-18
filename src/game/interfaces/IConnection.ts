export interface IConnection
{
    /**
     * Возвращает URL до сервера.
     * Например, "https://localhost:3000"
     */
    getServerURL(): URL;
    /**
     * Возвращает URL до базового endpoint всех API.
     * Например, "https://localhost:3000/api"
     */
    getAPIBaseURL(): URL;

    get<T>(url: URL): Promise<T | null>;
    post<T>(url: URL, body: BodyInit): Promise<T | null>;
}