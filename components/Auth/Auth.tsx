import { useState, useContext } from 'react'

import authController from '../../controllers/authController'
import AuthContext from '../../context/AuthContext'
import LanguageContext from '../../context/LanguageContext'

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

  const L = useContext(LanguageContext).Auth
  console.log(L)

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
          <input name={'email'} onChange={changeHandler} placeholder={L.email}/>
          <input name={'password'} onChange={changeHandler} placeholder={L.password}/>
          <button onClick={loginHandle}>{L.logIn}</button>
          <button onClick={isLoggingInHandle}>{L.createAccount}</button>
        </>
      ) : (
        <>
          <input name={'email'} onChange={changeHandler} placeholder={L.email}/>
          <input name={'password'} onChange={changeHandler} placeholder={L.password}/>
          <input name={'nickname'} onChange={changeHandler} placeholder={L.nickname}/>
          <button onClick={registerHandle}>{L.register}</button>
          <button onClick={isLoggingInHandle}>{L.iHaveAccount}</button>
        </>
      )}
    </>
  )
}

export default Auth
