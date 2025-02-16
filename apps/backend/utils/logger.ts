import { createLogger, format, transports } from 'winston'
const { combine, timestamp, json, colorize } = format

const logDevFormat = format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(info => {
        const message = typeof info.message === 'object' ? JSON.stringify(info.message) : info.message
        return `${info.timestamp} - ${info.level}: ${message}`
    }),
)

const logProdFormat = format.combine(
    format.splat(),
    format.timestamp(),
    format.printf(info => {
        const message = typeof info.message === 'object' ? info.message : { message: info.message }
        return JSON.stringify({
            timestamp: info.timestamp,
            level: info.level,
            ...message,
            context: info.context,
        })
    }),
)

const logger = createLogger({
    level: 'info',
    format: combine(colorize(), timestamp(), json()),
})

logger.add(
    new transports.Console({
        format: process.env.NODE_ENV === 'production' ? logProdFormat : logDevFormat,
    }),
)

export default logger
