export type Configuration = {
    database: {
        host: string,
        dbName: string,
        user: string,
        password: string,
        port?: number,
        useTls : boolean,
    }
    mailer: {
        url: string,
        token: string,
    }
}


export enum Environment {
    Local = "local",
    PreProduction = "pre-production",
    Production = "production"
}
