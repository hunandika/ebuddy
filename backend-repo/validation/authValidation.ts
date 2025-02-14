import { body } from 'express-validator'

export const verifyValidation = [
    body('idToken')
        .notEmpty()
        .withMessage('IdToken cannot be empty')
        .bail()
        .isString()
        .withMessage('IdToken must string'),
]

export const registerValidation = [
    body('id').notEmpty().withMessage('Id cannot be empty').bail().isString().withMessage('Id must string'),
    body('email').notEmpty().withMessage('Email cannot be empty').bail().isEmail().withMessage('Invalid email format'),
    body('name').notEmpty().withMessage('Name cannot be empty').bail().isString().withMessage('Name must string'),
    body('gender')
        .isString()
        .withMessage('Gender must string')
        .bail()
        .notEmpty()
        .withMessage('Gender cannot be empty')
        .bail()
        .isIn(['F', 'M'])
        .withMessage('Invalid Gender must be F or M'),
]
