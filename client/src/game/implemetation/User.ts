export class User
{
    public login: string;
    public created: Date | null = null;
    public lastLogin: Date | null = null;
    public authority: string[] = [];

    constructor(login: string)
    {
        this.login = login;
    }
}