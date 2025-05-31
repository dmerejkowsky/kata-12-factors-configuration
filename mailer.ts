import { Configuration } from "./configuration"
export class Client {
    constructor(config : Configuration) {
        const { mailer }  = config;
        console.log("Connecting to mailer API at: ", mailer.url)
    }
}