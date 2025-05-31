import * as env from "./env";

export const connect = () => {
    const host = env.getValue("APP_DATABASE_HOST")
    const dbName = env.getValue("APP_DATABASE_NAME")
    console.log("Connecting to db", dbName, "at", host)
}