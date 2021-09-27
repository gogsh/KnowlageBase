import connectDB from '../../middleware/mongodb'
import bc from '../../middleware/bcrypt'
import User from '../../models/user'
import { makeToken } from '../../middleware/jwt'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const {email, password } = req.body
    if (email && password) {
      try {
        const passwordhash = await bc.hashPw(password)
        const user = await User.findOne({ email })
        if(!user) {
          return res.status(400).json({message: 'пользователь не найден '})
        }
        const isMatch = await bc.comparePw(password, user['password'])

        if(!isMatch) {
          return res.status(400).json({message: 'неверный пароль, попробуйте снова'})
        }


        const token = makeToken(user)
        return res.json({token, email: user['email']})
      } catch (error) {
        return res.status(500).send(error.message)
      }
    } else {
      res.status(422).send('data_incomplete')
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

export default connectDB(handler)
