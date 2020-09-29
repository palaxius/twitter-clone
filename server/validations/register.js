import {body} from 'express-validator'

export const registerValidations = [
  body('email', 'Enter your email address')
    .isEmail()
    .withMessage('Incorrect email address')
    .isLength({
    min: 10,
    max: 40
  })
    .withMessage('Incorrect email length. Allowed number of characters in email from 10 to 40'),

  body('fullname', 'Enter your name')
    .isString()
    .isLength({
    min: 2,
    max: 40
  })
    .withMessage('Allowed number of characters in name from 2 to 30'),

  body('username', 'Enter your username')
    .isString()
    .isLength({
      min: 4,
      max: 40
    })
    .withMessage('Allowed number of characters in username from 4 to 30'),

  body('password', 'Enter your password')
    .isString()
    .isLength({ min: 6})
    .withMessage('Password must be at least 6 characters')
    .custom((value,  {req}) => {
      if (value !== req.body.password2) {
        throw new Error('Passwords do not match')
      } else {
        return value
      }
    })
]