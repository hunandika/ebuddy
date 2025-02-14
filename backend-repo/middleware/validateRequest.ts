import { Request, Response, NextFunction } from 'express'
import { validationResult, ValidationChain } from 'express-validator'

export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map(validation => validation.run(req)))

        const errors = validationResult(req)
        if (errors.isEmpty()) {
            return next()
        }
        const errorMap = errors.mapped()
        const formattedErrors = Object.keys(errorMap).map(field => ({
            field: field,
            message: errorMap[field].msg,
        }))

        res.status(400).json({ errors: formattedErrors })
    }
}
