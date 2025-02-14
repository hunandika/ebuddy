import express, { Application } from 'express'
import logger from '#/utils/logger'
import morganMiddleware from '#middleware/morganMiddlewares'
import v1Routes from '#/routes/v1'
import userRoutesTechnicalTest from '#routes/userRoutes.technicaltest'

const app: Application = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(morganMiddleware)

// According to the needs of the technical test questions, the endpoint names are update-user-data and fetch-user-data
app.use('/', userRoutesTechnicalTest)

// Best practice usage of the router
app.use('/v1', v1Routes)

app.get('/healthz', (_, res) => {
    res.status(200).json({ status: 'OK' })
})

// Start the server
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`)
})

// send back a 404 error for any unknown api request
app.use((_, res) => {
    res.status(404).json({ message: 'Not Found' })
})
