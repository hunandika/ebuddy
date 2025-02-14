import express from 'express'
import authRoutes from '#routes/authRoutes'
import userRoute from '#routes/userRoutes'
import authenticate from '#middleware/authenticate'
import rateLimiter from '#middleware/rateLimit'

const router = express.Router()

router.use('/user', authenticate, userRoute)
router.use('/auth', rateLimiter, authRoutes)

export default router
