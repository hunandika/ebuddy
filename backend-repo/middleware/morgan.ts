import logger from '#/utils/logger'
import morgan from 'morgan'

const morganMiddleware = morgan(':method :url :status :response-time ms - :res[content-length]', {
    stream: {
        write: message => {
            const logObject = {
                method: message.split(' ')[0],
                url: message.split(' ')[1],
                status: message.split(' ')[2],
                responseTime: message.split(' ')[3],
            }
            logger.info(logObject)
        },
    },
    skip: req => {
        return req.url === '/healthz'
    },
})

export default morganMiddleware
