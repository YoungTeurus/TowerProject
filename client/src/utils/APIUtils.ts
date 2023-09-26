import urlJoin from 'url-join';

export class APIUtils {
    private static api<T>(method: string, url: URL, body?: BodyInit): Promise<T> {
        return fetch(url, {
            method: method,
            body: body
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json() as Promise<T>
            })
    }

    public static get<T>(url: URL, body?: BodyInit): Promise<T> {
        return this.api("GET", url, body);
    }

    public static post<T>(url: URL, body?: BodyInit): Promise<T> {
        return this.api("POST", url, body);
    }

    public static connectUrl(baseURL: URL, ...appendPaths: string[]): URL {
        return new URL(urlJoin(baseURL.href, ...appendPaths));
    }
}