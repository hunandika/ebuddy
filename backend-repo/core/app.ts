import express, { Application } from 'express'
import logger from '#/utils/logger'

const app: Application = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Routes
app.get('/healthz', (_, res) => {
    res.status(200).json({ status: 'OK' })
})

// Start the server
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`)
})
