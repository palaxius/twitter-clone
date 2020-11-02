import {model, Schema} from 'mongoose'

const UserSchema = new Schema({
  email: {
    unique: true,
    required: true,
    type: String
  },
  fullname: {
    required: true,
    type: String
  },
  username: {
    unique: true,
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String,
    // select: false
  },
  confirmHash: {
    required: true,
    type: String,
    // select: false
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  location: String,
  about: String,
  website: String,
}, {
  timestamps: true
})

UserSchema.set('toJSON', {
  transform: function (_, obj) {
    delete obj.password
    delete obj.confirmHash
    return obj
  }
})


export const UserModel = model('User', UserSchema)