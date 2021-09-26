import mongoose from 'mongoose'
const Schema = mongoose.Schema

let user

if (!mongoose.models.User) {
  user = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    since: {
      type: Date,
      default: Date.now,
    },
  })
}

export default mongoose.model('User', user)
