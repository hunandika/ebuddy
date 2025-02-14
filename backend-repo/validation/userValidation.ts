import { body, query, param } from 'express-validator'

export const createUserValidation = [
    body('email').notEmpty().withMessage('Email cannot be empty').bail().isEmail().withMessage('Invalid email format'),
    body('name').notEmpty().withMessage('Name cannot be empty').bail().isString().withMessage('Name must string'),
    body('gender')
        .isString()
        .withMessage('Name must string')
        .bail()
        .notEmpty()
        .withMessage('Gender cannot be empty')
        .bail()
        .isIn(['F', 'M'])
        .withMessage('Invalid Gender must be F or M'),
]

export const getUsersValidation = [
    query('limit').notEmpty().withMessage('Limit cannot be empty').bail().isInt().withMessage('Limit must be integer'),
    query('page').notEmpty().withMessage('Page cannot be empty').bail().isInt().withMessage('Page must be integer'),
]

export const getUserByIdValidation = [
    param('id').notEmpty().withMessage('Id cannot be empty').bail().isString().withMessage('Id must be string'),
]

export const updateUserValidation = [
    param('id').notEmpty().withMessage('Id cannot be empty').bail().isString().withMessage('Id must be string'),
    body('email').notEmpty().withMessage('Email cannot be empty').bail().isEmail().withMessage('Invalid email format'),
    body('name').notEmpty().withMessage('Name cannot be empty').bail().isString().withMessage('Name must string'),
    body('gender')
        .isString()
        .withMessage('Name must string')
        .bail()
        .notEmpty()
        .withMessage('Gender cannot be empty')
        .bail()
        .isIn(['F', 'M'])
        .withMessage('Invalid Gender must be F or M'),
]

export const deleteUserValidation = [
    param('id').notEmpty().withMessage('Id cannot be empty').bail().isString().withMessage('Id must be string'),
]
