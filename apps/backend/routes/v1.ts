import express, { Router } from 'express'
import authRoutes from '#routes/authRoutes'
import userRoute from '#routes/userRoutes'
import authenticate from '#middleware/authenticate'
import rateLimiter from '#middleware/rateLimit'

const router: Router = express.Router()

router.use('/user', authenticate, userRoute)
router.use('/auth', rateLimiter, authenticate, authRoutes)

export default router
