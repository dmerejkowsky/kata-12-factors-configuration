import * as env from "./env";

export const connect = () => {
    const host = env.getValue("APP_DATABASE_HOST")
    const dbName = env.getValue("APP_DATABASE_NAME")
    const useTls = env.getOptionalValue("APP_DATABASE_USE_TLS", "true") != "false"
    console.log("Connecting to db", dbName, "at", host)
    if(useTls)  {
        console.log("Using TLS")
    }
}