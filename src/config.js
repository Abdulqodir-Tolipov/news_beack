const PRIVATE_KEY = 'tolipov'
import path from 'path'

import dotenv from 'dotenv'
dotenv.config({ path: path.join( process.cwd(), 'src', '.env' ) })

const pgConfig = {
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	database: process.env.PG_DATABASE
}


export {
    PRIVATE_KEY,
    pgConfig
}