import connectDB from '../../../middleware/mongodb'
import User from '../../../models/user'
import { Article } from '../../../types/Article.types'
import mongoose from 'mongoose'

const handler = async (req, res) => {
  /** Add article */
  if (req.method === 'POST') {
    try {
      const { userId, articleName } = req.body

      const articleId = new mongoose.Types.ObjectId().toString()
      const emptyArticle: Article = {
        _id: articleId,
        name: articleName,
        body: '',
      }

      const { acknowledged } = await User.updateOne(
        { _id: userId },
        { $push: { articles: emptyArticle } }
      )

      if (acknowledged) {
        return res.status(200).send(JSON.stringify(articleId))
      }
    } catch (error) {
      res.status(200).send(`data_incomplete`)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

export default connectDB(handler)
