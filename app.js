import express from 'express'
import router from './views/router.js'
import cors from 'cors'
import logger from './middleware/logger.js'
import errorHandler from './middleware/errorHandler.js'

const app = express()
// ! Order is important for these
app.use(express.json())
app.use(logger)
app.use(cors())
app.use('/api', router)
app.use(errorHandler)
export default app