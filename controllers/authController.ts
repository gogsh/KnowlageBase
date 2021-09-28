import { useHttp } from '../hooks/http.hook'

export default function authController() {
  const { loading, request, error, clearError } = useHttp()

  async function registerHandler({ nickname, email, password }) {
    return await request(process.env.DOMAIN + '/api/register', 'POST', {
      nickname,
      email,
      password,
    })
  }

  async function loginHandler({ email, password }) {
    return await request(process.env.DOMAIN + '/api/login', 'POST', {
      email,
      password,
    })
  }

  return { registerHandler, loginHandler }
}
