export function parseToMap(json: string): Map<string, object>
{
    return new Map(Object.entries(JSON.parse(json)));
}

export function parse<T>(json: string): T
{
    return JSON.parse(json);
}