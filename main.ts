import * as database from "./database"
import * as mailer from "./mailer"

const main = () => { 
    const db = database.connect()
    const mailerClient = new mailer.Client()
}

main()