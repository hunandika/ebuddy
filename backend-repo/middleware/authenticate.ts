import { Response, NextFunction } from 'express'
import { AuthRepository } from '#repository/authRepository'
import { generateAPIResponse } from '#utils/http'
import logger from '#utils/logger'
import { AuthRequest } from '#entities/auth'

const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split('Bearer ')[1]

    if (!token) {
        return generateAPIResponse(res, { message: 'Unauthorized, token missing', statusCode: 401 })
    }

    try {
        const auth = new AuthRepository()
        const decodedToken = await auth.verify(token)
        if (!decodedToken) {
            return generateAPIResponse(res, { message: 'Unauthorized, token invalid', statusCode: 401 })
        }

        req.user = decodedToken
        next()
    } catch (error) {
        logger.error('Unauthorized, token missing', error)
        return generateAPIResponse(res, { message: 'Unauthorized, token missing', statusCode: 401 })
    }
}

export default authenticate
