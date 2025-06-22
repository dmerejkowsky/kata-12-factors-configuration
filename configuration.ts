export type Configuration = {
    database: {
        host: string,
        dbName: string,
        user: string,
        password: string,
        port?: number,
    }
    mailer: {
        url: string,
        token: string,
    }
}


export enum Environment {
    Local = "local",
    Production = "production"
}