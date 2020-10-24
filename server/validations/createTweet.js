import {body} from 'express-validator'

export const createTweetValidations = [
  body('text', 'Enter tweets text')
    .isString()
    .isLength({
      max: 280
    })
    .withMessage('The allowed maximum number of characters is 280'),
]