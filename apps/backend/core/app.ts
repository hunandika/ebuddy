import express, { Application } from 'express'
import morganMiddleware from '#middleware/morgan'
import v1Routes from '#/routes/v1'
import cors from 'cors'
import userRoutesTechnicalTest from '#routes/userRoutes.technicaltest'

const app: Application = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(morganMiddleware)

// According to the needs of the technical test questions, the endpoint names are update-user-data and fetch-user-data
app.use('/', userRoutesTechnicalTest)

// Best practice usage of the router
app.use('/v1', v1Routes)

// send back a 404 error for any unknown api request
app.use((_, res) => {
    res.status(404).json({ message: 'Not Found' })
})

app.get('/healthz', (_, res) => {
    res.status(200).json({ status: 'OK' })
})

export default app
