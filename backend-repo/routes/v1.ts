import express from 'express'
import userRoute from '#routes/userRoutes'

const router = express.Router()

router.use('/user', userRoute)

export default router
