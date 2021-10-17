import connectDB from '../../middleware/mongodb'
import bc from '../../middleware/bcrypt'
import User from '../../models/user'
import * as emailValidator from 'email-validator'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { nickname, email, password } = req.body
    if (nickname && email && password) {
      try {
        if (!emailValidator.validate(email)) {
          return res.status(400).json({ message: 'некорректный e-mail адресс' })
        }
        if (password.length < 6) {
          return res
            .status(400)
            .json({ message: 'пароль должен содержать больше 6 символов' })
        }
        const candidate = await User.findOne({ email })
        if (candidate) {
          return res
            .status(400)
            .json({ message: 'Такой пользователь уже существует' })
        }

        const passwordhash = await bc.hashPw(password)
        const user = new User({
          nickname,
          email,
          password: passwordhash,
          articles: []
        })
        const usercreated = await user.save()
        return res.status(200).send(usercreated)
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
