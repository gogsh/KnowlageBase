import { createContext } from 'react'

const AuthContext : {
  token: string | null,
  userId: string | null,
  nickname: string | null,
  login: (jwtToken: string, id: string, name: string,) => void,
  logout: () => void,
} = {
  token: null,
  userId: null,
  nickname: null,
  login: () => {},
  logout: () => {},
}

export default createContext(AuthContext)
