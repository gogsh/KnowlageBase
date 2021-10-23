import connectDB from '../../../middleware/mongodb'
import User from '../../../models/user'

const handler = async (req, res) => {
  /** Delete article */
  if (req.method === 'POST') {
    try {
      const { userId, articleId } = req.body

      const { acknowledged } = await User.updateOne(
        { _id: userId },
        { $pull: { articles: { _id: articleId } } }
      )

      if (acknowledged) {
        return res.status(200).send(JSON.stringify(acknowledged))
      }
    } catch (error) {
      res.status(200).send(`articles request failed`)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

export default connectDB(handler)
