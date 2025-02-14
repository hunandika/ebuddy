import express from 'express'
import { UserController } from '#controller/userController'
import { validate } from '#middleware/validateRequest'
import {
    getUsersValidation,
    updateUserValidation,
} from '#validation/userValidation'

const router = express.Router()
const userController = new UserController()

// According to the needs of the technical test questions, the endpoint names are update-user-data and fetch-user-data
router.put('/update-user-data/:id', validate(updateUserValidation), (req, res) => userController.updateUser(req, res))
router.get('/fetch-user-data', validate(getUsersValidation), (req, res) => userController.getUsers(req, res))

export default router
