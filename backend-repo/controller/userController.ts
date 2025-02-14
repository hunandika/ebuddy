import { Request, Response } from 'express'
import { UserRepository } from '#repository/userRepository'
import { User } from '#entities/user'
import { generateAPIResponse } from '#utils/http'
import logger from '#utils/logger'

export class UserController {
    private userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository()
    }

    public async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const { page, limit } = req.query
            const data = await this.userRepository.findAll(Number(limit), Number(page))
            generateAPIResponse<User[]>(res, {
                statusCode: 200,
                data: data.users,
                meta: data.meta,
                message: 'Get users successfully',
            })
        } catch (error) {
            logger.error('Error retrieving users', error)
            generateAPIResponse(res, { message: 'Error retrieving users', statusCode: 500 })
        }
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userRepository.findById(req.params.id)
            if (!user) {
                generateAPIResponse(res, { message: 'User not found', statusCode: 404 })
                return
            }
            generateAPIResponse<User>(res, {
                statusCode: 200,
                data: user,
                message: 'Get user by id successfully',
            })
        } catch (error) {
            logger.error('Error retrieving users by id', error)
            generateAPIResponse(res, { message: 'Error retrieving users by id', statusCode: 500 })
        }
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const newUser: User = req.body
            const createdUser = await this.userRepository.create(newUser)
            generateAPIResponse<User>(res, {
                statusCode: 201,
                data: createdUser,
                message: 'User created successfully',
            })
        } catch (error) {
            logger.error('Error creating user', error)
            generateAPIResponse(res, { message: 'Error creating user', statusCode: 500 })
        }
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const updatedUser: User = req.body
            updatedUser.id = id

            const user = await this.userRepository.update(updatedUser)
            if (!user) {
                generateAPIResponse(res, { message: 'User not found', statusCode: 404 })
                return
            }
            generateAPIResponse<User>(res, {
                statusCode: 200,
                data: user,
                message: 'User updated successfully',
            })
        } catch (error) {
            logger.error('Error updating user', error)
            generateAPIResponse(res, { message: 'Error updating user', statusCode: 500 })
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userRepository.delete(req.params.id)
            if (!user) {
                generateAPIResponse(res, { message: 'User not found', statusCode: 404 })
                return
            }
            generateAPIResponse(res, {
                statusCode: 200,
                message: 'User deleted successfully',
            })
        } catch (error) {
            logger.error('Error deleting user', error)
            generateAPIResponse(res, { message: 'Error deleting user', statusCode: 500 })
        }
    }
}
