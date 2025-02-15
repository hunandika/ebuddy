import logger from '#/utils/logger'
import app from './app'

const EXPRESS_PORT = process.env.EXPRESS_PORT || 3000

// Start the server
app.listen(EXPRESS_PORT, () => {
    logger.info(`Server is running on http://localhost:${EXPRESS_PORT}`)
})
