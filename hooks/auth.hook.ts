import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [nickname, setNickname] = useState(null)

  const login = useCallback((jwtToken, id, nickname) => {
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
  }, [])

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
