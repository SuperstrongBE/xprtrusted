import 'dotenv/config'
import { configDotenv } from 'dotenv'
configDotenv({ path: `.env.${process.env.NODE_ENV}` })
