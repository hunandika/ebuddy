import logger from '#/utils/logger'
import app from './app'
const PORT = process.env.PORT || 3000

// Start the server
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`)
})
