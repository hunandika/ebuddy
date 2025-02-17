import { Request, Response } from 'express'
import { UserRepository } from '#repository/userRepository'
import { User } from '@repo/entities/user'
import { generateAPIResponse } from '#utils/http'
import logger from '#utils/logger'
import { AuthRequest } from '#entities/auth'

export class AuthController {
    private userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository()
    }

    public async verify(req: AuthRequest, res: Response): Promise<void> {
        try {
            if (!req.user?.uid) {
                generateAPIResponse(res, { message: 'Invalid token', statusCode: 401 })
                return
            }

            const user = await this.userRepository.findById(req.user.uid)
            if (!user) {
                await this.userRepository.updateRecentlyActive(req.user.uid)
                generateAPIResponse(res, { message: 'User not found', statusCode: 404 })
                return
            }

            generateAPIResponse<User>(res, {
                statusCode: 200,
                data: user,
                message: 'User verified successfully',
            })
        } catch (error) {
            logger.error('Error verified user', error)
            generateAPIResponse(res, { message: 'Error verified user', statusCode: 500 })
        }
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const newUser: User = req.body
            await this.userRepository.register(newUser)
            generateAPIResponse(res, {
                statusCode: 201,
                message: 'Register User successfully',
            })
        } catch (error) {
            logger.error('Error register user', error)
            generateAPIResponse(res, { message: 'Error register user', statusCode: 500 })
        }
    }
}
