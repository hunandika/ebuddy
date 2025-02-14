import express from 'express'
import { UserController } from '#controller/userController'
import { validate } from '#middleware/validateRequest'
import {
    createUserValidation,
    getUsersValidation,
    getUserByIdValidation,
    updateUserValidation,
    deleteUserValidation,
} from '#validation/userValidation'

const router = express.Router()
const userController = new UserController()

router.get('/', validate(getUsersValidation), (req, res) => userController.getUsers(req, res))
router.get('/:id', validate(getUserByIdValidation), (req, res) => userController.getUserById(req, res))
router.post('/', validate(createUserValidation), (req, res) => userController.createUser(req, res))
router.put('/:id', validate(updateUserValidation), (req, res) => userController.updateUser(req, res))
router.delete('/:id', validate(deleteUserValidation), (req, res) => userController.deleteUser(req, res))

export default router
