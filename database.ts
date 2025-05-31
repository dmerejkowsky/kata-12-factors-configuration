import { Configuration } from "./configuration";

export const connect = (config: Configuration) => {
    const { host, dbName, useTls } = config.database
    console.log("Connecting to db", dbName, "at", host)
    if (useTls) {
        console.log("Using tls");
    }
}
