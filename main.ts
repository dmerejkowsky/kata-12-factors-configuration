import { readFileSync } from "node:fs"
import { Configuration, Environment } from "./configuration"
import { exit } from "node:process"
import * as database from "./database"
import * as mailer from "./mailer"

const main = () => {
    const environment = process.env["APP_ENVIRONMENT"]
    if(!environment) {
        console.error("APP_ENVIRONMENT must be defined")
        exit(1);

    }
    if(!Object.values(Environment).includes(environment as Environment)) {
        console.error("Unknown environment:", environment)
        exit(1);

    }

    console.log("Env: ", environment)
    
    const configPath = `configs/${environment}.json`
    const jsonConfig = readFileSync(configPath).toString()
    const config: Configuration = JSON.parse(jsonConfig)
 
    const db = database.connect(config)
    const mailerClient = new mailer.Client(config)
}

main()