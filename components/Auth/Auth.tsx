import { useState, useContext } from 'react'
import LanguageContext from '../../context/LanguageContext'

import AuthContext from '../../context/AuthContext'
import { AuthForm } from '../../types/Auth.types'

import { useHttp } from '../../hooks/http.hook'

interface Props {}

const Auth: React.FC<Props> = () => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(true)
  const [form, setForm] = useState<AuthForm>({
    nickname: '',
    email: '',
    password: '',
  })
  const auth = useContext(AuthContext)
  const { loading, request, error, clearError } = useHttp()

  /** translations */
  const L = useContext(LanguageContext).Auth

  const loginHandle = async () => {
    const data = await request(process.env.DOMAIN + '/api/login', 'POST', {
      email: form.email,
      password: form.password,
    })
    auth.login(data['token'], data['userId'], data['nickname'])
  }

  const registerHandle = async () => {
    const data = await request(process.env.DOMAIN + '/api/register', 'POST', {
      nickname: form.nickname,
      email: form.email,
      password: form.password,
    })
    if (data) {
      setIsLoggingIn(!isLoggingIn)
    }
  }

  const isLoggingInHandle = () => {
    setIsLoggingIn(!isLoggingIn)
  }

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  // TODO: Input components
  // TODO: Button
  return (
    <>
      {isLoggingIn ? (
        <>
          <input
            name={'email'}
            onChange={changeHandler}
            placeholder={L.email}
          />
          <input
            name={'password'}
            onChange={changeHandler}
            placeholder={L.password}
          />
          <button onClick={loginHandle}>{L.logIn}</button>
          <button onClick={isLoggingInHandle}>{L.createAccount}</button>
        </>
      ) : (
        <>
          <input
            name={'email'}
            onChange={changeHandler}
            placeholder={L.email}
          />
          <input
            name={'password'}
            onChange={changeHandler}
            placeholder={L.password}
          />
          <input
            name={'nickname'}
            onChange={changeHandler}
            placeholder={L.nickname}
          />
          <button onClick={registerHandle}>{L.register}</button>
          <button onClick={isLoggingInHandle}>{L.iHaveAccount}</button>
        </>
      )}
    </>
  )
}

export default Auth
