import express from 'express'
import config from 'config'
import connectDB from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

const port = config.get<number>('port')

const app = express()

app.use(express.json())

app.listen(port, async ()=>{
    logger.info(`App is running at http://localhost${port}`)
    await connectDB()
    routes(app)
})