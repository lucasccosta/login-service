import express from "express"
import bodyParser from "body-parser"
import morgan from "morgan"
import { router } from "./routes"
import { dbConnect } from "./config/db-typeorm"

const app = express()
app.use(bodyParser.json())

// Configure logs
app.use(morgan('dev'))

app.use(router)

dbConnect();

export { app }