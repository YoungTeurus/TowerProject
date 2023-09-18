import { IConnection } from "../../interfaces/IConnection";
import { APIUtils } from "../../utils/APIUtils";

type mockApiCallback = (method: string, url: URL, body?: BodyInit) => Object | null;

export class MockConnection implements IConnection {
    private static SERVER_URL: string = "https://server:8080";
    private static API_ENDPOINT: string = "/api";

    answers: Map<string, mockApiCallback> = new Map();

    public addAnswer(url: URL, callback: mockApiCallback)
    {
        this.answers.set(url.href, callback);
    }

    getServerURL(): URL {
        return new URL(MockConnection.SERVER_URL);
    }
    getAPIBaseURL(): URL {
        return APIUtils.connectUrl(this.getServerURL(), MockConnection.API_ENDPOINT);
    }

    private mockApi<T>(method: string, url: URL, body?: BodyInit): Promise<T | null> {
        const callback = this.answers.get(url.href);
        if (callback === undefined)
            return new Promise((resolve, _) => resolve(null));
        return new Promise((resolve, _) => resolve(callback(method, url, body) as T | null));
    }

    get<T>(url: URL): Promise<T | null> {
        console.log("GET url: %s", url);
        return this.mockApi<T>("GET", url);
    }

    post<T>(url: URL, body: BodyInit): Promise<T | null> {
        console.log("POST url: %s , body: %s", url, body);
        return this.mockApi<T>("POST", url, body);
    }
}