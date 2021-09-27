import jwt from 'jsonwebtoken'

export function makeToken(user) {
  return jwt.sign(
    { user: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '2h'}
  )
}
