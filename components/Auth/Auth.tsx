import { useState, useContext } from 'react'
import LanguageContext from '../../context/LanguageContext'

import AuthContext from '../../context/AuthContext'
import { AuthForm } from '../../types/Auth.types'

import { useHttp } from '../../hooks/http.hook'

import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

import { Wrapper } from './AuthStyles'


const Auth: React.FC = () => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(true)
  const [form, setForm] = useState<AuthForm>({
    nickname: '',
    email: '',
    password: '',
  })
  const auth = useContext(AuthContext)
  const { loading, request, error, clearError } = useHttp()

  /** translations */
  const L = useContext(LanguageContext).translation.Auth

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

  return (
    <Wrapper>
      {isLoggingIn ? (
        <>
          <div className='Wrapper__inputsContainer'>
            <Input
              placeholder={L.email}
              size={'normal'}
              onChange={changeHandler}
              name={'email'}
            />
            <Input
              placeholder={L.password}
              size={'normal'}
              onChange={changeHandler}
              name={'password'}
              type={'password'}
            />
          </div>
          <div className='Wrapper__buttonsContainer'>
            <Button
              clickHandler={loginHandle}
              text={L.logIn}
              size={'normal'}
              type={form.email && form.password ? 'primary' : 'secondary'}
            />
            <Button
              clickHandler={isLoggingInHandle}
              text={L.createAccount}
              size={'normal'}
              type={'link'}
            />
          </div>
        </>
      ) : (
        <>
          <div className='Wrapper__inputsContainer'>
            <Input
              placeholder={L.email}
              size={'normal'}
              onChange={changeHandler}
              name={'email'}
            />
            <Input
              placeholder={L.password}
              size={'normal'}
              onChange={changeHandler}
              name={'password'}
              type={'password'}
            />
            <Input
              placeholder={L.nickname}
              size={'normal'}
              onChange={changeHandler}
              name={'nickname'}
            />
          </div>
          <div className='Wrapper__buttonsContainer'>
            <Button
              clickHandler={registerHandle}
              text={L.register}
              size={'normal'}
              type={
                form.email && form.password && form.nickname ? 'primary' : 'secondary'
              }
            />
            <Button
              clickHandler={isLoggingInHandle}
              text={L.iHaveAccount}
              size={'normal'}
              type={'link'}
            />
          </div>
        </>
      )}
    </Wrapper>
  )
}

export default Auth
