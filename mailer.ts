import * as env from "./env"

export class Client {
    constructor() {
        const url = env.getValue("APP_MAILER_URL")
        console.log("Connecting to mailer API at: ", url)
    }
}