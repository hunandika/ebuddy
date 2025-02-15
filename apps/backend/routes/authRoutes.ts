import express, { Router } from 'express'
import { AuthController } from '#controller/authController'
import validate from '#middleware/validateRequest'
import { verifyValidation, registerValidation } from '#validation/authValidation'

const router: Router = express.Router()
const authController = new AuthController()

router.post('/verify', validate(verifyValidation), (req, res) => authController.verify(req, res))
router.post('/register', validate(registerValidation), (req, res) => authController.register(req, res))

export default router
