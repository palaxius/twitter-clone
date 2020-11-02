import {model, Schema} from 'mongoose'

const TweetSchema = new Schema({
  text: {
    required: true,
    type: String,
    maxlength: 280
  },
  user: {
    required: true,
    ref: 'User',
    type: Schema.Types.ObjectId
  }
}, {
  timestamps: true
})

export const TweetModel = model('Tweet', TweetSchema)