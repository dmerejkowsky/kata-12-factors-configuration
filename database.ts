import { Configuration } from "./configuration";

export const connect = (config: Configuration) => {
    const { host, dbName } = config.database
    console.log("Connecting to db", dbName, "at", host)
}