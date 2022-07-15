import express from 'express'
import config from 'config'
import connectDB from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";

const port = config.get<number>('port')


const app = express()

app.use(express.json())

app.use(deserializeUser)


app.listen(port, async ()=>{
    logger.info(`App is running at http://localhost${port}`)
    await connectDB()
    routes(app)
})