import rateLimit from 'express-rate-limit'
import { generateAPIResponse } from '#utils/http'

const rateLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 10,
    handler: (_, res) => {
        return generateAPIResponse(res, {
            message: 'Too many requests from this IP, please try again after 5 minutes',
            statusCode: 429,
        })
    },
})

export default rateLimiter
