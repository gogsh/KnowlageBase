import bcrypt from 'bcrypt'

function bc() {
  const hashPw = password => {
    return bcrypt.hash(password, 10)
  }

  return { hashPw }
}

export default bc()
