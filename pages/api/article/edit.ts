import connectDB from '../../../middleware/mongodb'
import User from '../../../models/user'

const handler = async (req, res) => {
  /** Edit article */
  if (req.method === 'POST') {
    try {
      const { article } = req.body
      console.log(article)
      const { acknowledged } = await User.updateOne(
        { 'articles._id': article._id },
        { $set: { 'articles.$': article } }
      )
      console.log(acknowledged)

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
