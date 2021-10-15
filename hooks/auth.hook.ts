import { useState, useCallback, useEffect } from 'react'
import * as Auth from '../types/Auth.types'

/** Name of LocalStorage field for auth info */
const storageName = 'userData'

export const useAuth: Auth.UseAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [nickname, setNickname] = useState(null)

  const login: Auth.LoginHandler = useCallback(
    (jwtToken: Auth.Token, id: Auth.UserId, nickname: Auth.Nickname) => {
      setToken(jwtToken)
      setUserId(id)
      setNickname(nickname)
      localStorage.setItem(
        storageName,
        JSON.stringify({
          userId: id,
          token: jwtToken,
          nickname,
        })
      )
    },
    []
  )

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setNickname(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))
    if (data && data.token) {
      login(data.token, data.userId, data.nickname)
    } else {
      logout()
    }
  }, [login, logout])

  return { login, logout, token, userId, nickname }
}
