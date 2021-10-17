import connectDB from '../../../middleware/mongodb'
import User from '../../../models/user'

const handler = async (req, res) => {
  /** Get all artucles */
  if (req.method === 'POST') {
    try {
      const { userId } = req.body

      const userData = await User.findOne({ _id: userId })

      if (userData) {
        return res.status(200).send(userData['articles'])
      }
    } catch (error) {
      res.status(200).send(`articles request failed`)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

export default connectDB(handler)
