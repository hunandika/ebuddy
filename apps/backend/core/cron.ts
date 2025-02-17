import { CronJob } from 'cron'
import { UserController } from '#/controller/userController'
import logger from '#utils/logger'

export const updateUserRankCron = new CronJob(
    '*/1 * * * *', // update every 1 minutes for testing purposes
    async function () {
        logger.info('Running Cron Update user ranking')
        const userController = new UserController()
        await userController.updateUserRanking()
    },
    null,
    false,
)
