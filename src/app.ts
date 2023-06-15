import express from "express"
import bodyParser from "body-parser"
import morgan from "morgan"
import { router } from "./routes"

const app = express()
app.use(bodyParser.json())

// Configure logs
app.use(morgan('dev'))

app.use(router)

export { app }