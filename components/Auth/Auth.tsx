import { useState, useContext } from 'react'

import authController from '../../controllers/authController'
import AuthContext from '../../context/AuthContext'

interface Props {}

function Auth(props: Props) {
  const [isLoggingIn, setIsLoggingIn] = useState(true)
  const [form, setForm] = useState({
    nickname: '',
    email: '',
    password: '',
  })

  const { registerHandler, loginHandler } = authController()
  const auth = useContext(AuthContext)

  const loginHandle = async () => {
    const data = await loginHandler({
      email: form.email,
      password: form.password,
    })
    auth.login(data['token'], data['userId'], data['nickname'])
  }

  const registerHandle = async () => {
    const data = await registerHandler(form)
    if(data) {
      setIsLoggingIn(!isLoggingIn)
    }
  }

  const isLoggingInHandle = () => {
    setIsLoggingIn(!isLoggingIn)
  }

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <>
      {isLoggingIn ? (
        <>
          <input name={'email'} onChange={changeHandler} placeholder={'email'}/>
          <input name={'password'} onChange={changeHandler} placeholder={'password'}/>
          <button onClick={loginHandle}>Войти</button>
          <button onClick={isLoggingInHandle}>Cоздать аккаунт</button>
        </>
      ) : (
        <>
          <input name={'email'} onChange={changeHandler} placeholder={'email'}/>
          <input name={'password'} onChange={changeHandler} placeholder={'password'}/>
          <input name={'nickname'} onChange={changeHandler} placeholder={'nickname'}/>
          <button onClick={registerHandle}>Зарегистрироваться</button>
          <button onClick={isLoggingInHandle}>У меня уже есть аккаунт</button>
        </>
      )}
    </>
  )
}

export default Auth
