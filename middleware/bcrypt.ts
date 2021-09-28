import bcrypt from 'bcrypt'

function bc() {
  const hashPw = password => {
    return bcrypt.hash(password, 10)
  }
  const comparePw = (first, second) => {
    return bcrypt.compare(first, second)
  }

  return { hashPw, comparePw }
}

export default bc()
