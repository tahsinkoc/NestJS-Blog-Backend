export class Auth {
    private static instance: Auth;
    private fToken: string = "";

    private constructor() { }

    public static getInstance() {
        if (!Auth.instance) {
            Auth.instance = new Auth();
        }
        return Auth.instance;
    }


    async save(token: string): Promise<string> {
        this.fToken = token
        return this.fToken
    }
    async check(token: string): Promise<boolean> {
        // console.log('Token:', this.fToken, 'yeni Token:', token)
        return this.fToken === token
    }
}